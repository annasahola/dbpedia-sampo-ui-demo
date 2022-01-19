import React from 'react'
import PropTypes from 'prop-types'
import intl from 'react-intl-universal'
import withStyles from '@mui/styles/withStyles'
import ApexCharts from 'apexcharts'
import CircularProgress from '@mui/material/CircularProgress'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'
import GeneralDialog from '../main_layout/GeneralDialog'
import InstaceList from '../main_layout/InstanceList'

const defaultPadding = 32
const smallScreenPadding = 8

const styles = theme => ({
  selectContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1)
  },
  formControl: {
    marginLeft: theme.spacing(1)
  }
})

/**
 * A component for rendering charts with ApexCharts.
 */
class ApexChart extends React.Component {
  constructor (props) {
    super(props)
    this.chartRef = React.createRef()
    const { apexChartsConfig } = this.props
    let { resultClass, resultClassConfig } = this.props
    if (resultClassConfig.dropdownForResultClasses) {
      resultClass = resultClassConfig.defaultResultClass
      resultClassConfig = resultClassConfig.resultClasses[resultClass]
    }
    this.state = {
      resultClass,
      resultClassConfig,
      createChartData: resultClassConfig.createChartData
        ? apexChartsConfig[resultClassConfig.createChartData]
        : apexChartsConfig[resultClassConfig.chartTypes[0].createChartData],
      chartType: resultClassConfig.dropdownForChartTypes ? resultClassConfig.chartTypes[0].id : null,
      dialogData: null
    }
  }

  componentDidMount = () => {
    const { results } = this.props
    const { doNotRenderOnMount } = this.props.resultClassConfig
    if (results && results.length > 0 && !doNotRenderOnMount) {
      this.renderChart()
    }
    this.props.fetchData({
      perspectiveID: this.props.perspectiveConfig.id,
      resultClass: this.state.resultClass,
      facetClass: this.props.facetClass,
      facetID: this.props.facetID,
      uri: this.props.perspectiveState && this.props.perspectiveState.instanceTableData
        ? this.props.perspectiveState.instanceTableData.id
        : null
    })
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.resultUpdateID !== this.props.resultUpdateID) {
      this.renderChart()
    }
    const { pageType = 'facetResults' } = this.props
    if (pageType === 'facetResults' && prevProps.facetUpdateID !== this.props.facetUpdateID) {
      this.props.fetchData({
        perspectiveID: this.props.perspectiveConfig.id,
        resultClass: this.state.resultClass,
        facetClass: this.props.facetClass,
        facetID: this.props.facetID
      })
    }
    if (prevState.resultClass !== this.state.resultClass) {
      this.props.fetchData({
        perspectiveID: this.props.perspectiveConfig.id,
        resultClass: this.state.resultClass,
        facetClass: this.props.facetClass,
        facetID: this.props.facetID
      })
    }
    if (prevState.chartType !== this.state.chartType) {
      this.renderChart()
    }
    if (prevProps.screenSize !== this.props.screenSize) {
      this.renderChart()
    }
    if (prevProps.instanceAnalysisDataUpdateID !== this.props.instanceAnalysisDataUpdateID) {
      this.setState({
        dialogData: this.props.instanceAnalysisData
      })
    }
  }

  componentWillUnmount () {
    if (!this.chart == null) {
      this.chart.destroy()
    }
  }

  renderChart = () => {
    if (this.props.results) {
      // Destroy the previous chart
      if (this.chart !== undefined) {
        this.chart.destroy()
      }
      let chartTypeObj = null
      const { resultClassConfig, chartType } = this.state
      if (resultClassConfig.dropdownForChartTypes) {
        chartTypeObj = resultClassConfig.chartTypes.find(chartTypeObj => chartTypeObj.id === chartType)
      }
      this.chart = new ApexCharts(
        this.chartRef.current,
        this.state.createChartData({
          ...this.props,
          resultClassConfig: this.state.resultClassConfig,
          chartTypeObj,
          fetchInstanceAnalysis: this.props.fetchInstanceAnalysis
        })
      )
      this.chart.render()
    }
  }

  handleResultClassOnChange = event => {
    const { apexChartsConfig } = this.props
    const newResultClass = event.target.value
    const resultClassConfig = this.props.resultClassConfig.resultClasses[newResultClass]
    this.setState({
      resultClass: newResultClass,
      resultClassConfig,
      createChartData: resultClassConfig.createChartData
        ? apexChartsConfig[resultClassConfig.createChartData]
        : apexChartsConfig[resultClassConfig.chartTypes[0].createChartData],
      chartType: resultClassConfig.dropdownForChartTypes ? resultClassConfig.chartTypes[0].id : null
    })
  }

  handleChartTypeOnChange = event => {
    const { resultClassConfig } = this.state
    const chartType = event.target.value
    const chartTypeObj = resultClassConfig.chartTypes.find(chartTypeObj => chartTypeObj.id === chartType)
    this.setState({
      chartType,
      createChartData: this.props.apexChartsConfig[chartTypeObj.createChartData]
    })
  }

  handleDialogOnClose = event => this.setState({ dialogData: null })

  isSmallScreen = () => {
    const { screenSize } = this.props
    return screenSize === 'xs' || screenSize === 'sm'
  }

  getHeightForRootContainer = () => {
    if (this.isSmallScreen()) {
      return 'auto'
    }
    const rootHeightReduction = this.props.portalConfig.layoutConfig.tabHeight + 2 * defaultPadding + 1
    return `calc(100% - ${rootHeightReduction}px)`
  }

  getHeightForChartContainer = () => {
    const { dropdownForResultClasses, dropdownForChartTypes } = this.props.resultClassConfig
    if (this.isSmallScreen()) {
      return 600
    }
    let chartHeightReduction = 0
    if (dropdownForResultClasses) {
      chartHeightReduction += 40 // dropdown height
    }
    if (dropdownForChartTypes) {
      chartHeightReduction += 40 // dropdown height
    }
    return `calc(100% - ${chartHeightReduction}px)`
  }

  render () {
    // static configs from props
    const { classes, fetching, resultClassConfig } = this.props
    const { pageType = 'facetResults', dropdownForResultClasses, resultClasses } = resultClassConfig
    // dynamic configs from state
    const { dropdownForChartTypes, chartTypes } = this.state.resultClassConfig
    let rootStyle = {
      width: '100%',
      height: '100%'
    }
    if (pageType === 'facetResults' || pageType === 'instancePage') {
      const padding = this.isSmallScreen() ? smallScreenPadding : defaultPadding
      rootStyle = {
        height: this.getHeightForRootContainer(),
        width: `calc(100% - ${2 * padding}px)`,
        padding: padding,
        backgroundColor: '#fff',
        borderTop: '1px solid rgba(224, 224, 224, 1)'
      }
    }
    const spinnerContainerStyle = {
      display: 'flex',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    }
    const chartContainerStyle = {
      width: '100%',
      height: this.getHeightForChartContainer()
    }
    let dropdownText = intl.get('apexCharts.grouping')
    if (this.props.xaxisType === 'numeric') {
      dropdownText = intl.get('apexCharts.property')
    }
    return (
      <div style={rootStyle}>
        {dropdownForResultClasses &&
          <div className={classes.selectContainer}>
            <Typography>{dropdownText}</Typography>
            <FormControl className={classes.formControl}>
              <Select
                id='select-result-class'
                value={this.state.resultClass}
                onChange={this.handleResultClassOnChange}
              >
                {Object.keys(resultClasses).map(resultClass =>
                  <MenuItem key={resultClass} value={resultClass}>{intl.get(`apexCharts.resultClasses.${resultClass}`)}</MenuItem>
                )}
              </Select>
            </FormControl>
          </div>}
        {dropdownForChartTypes &&
          <div className={classes.selectContainer}>
            <Typography>{intl.get('apexCharts.chartType')}</Typography>
            <FormControl className={classes.formControl}>
              <Select
                id='select-chart-type'
                value={this.state.chartType}
                onChange={this.handleChartTypeOnChange}
              >
                {chartTypes.map(chartType =>
                  <MenuItem key={chartType.id} value={chartType.id}>{intl.get(`apexCharts.${chartType.id}`)}</MenuItem>
                )}
              </Select>
            </FormControl>
          </div>}
        {fetching &&
          <div style={spinnerContainerStyle}>
            <CircularProgress />
          </div>}
        {!fetching &&
          <div style={chartContainerStyle}>
            <div ref={this.chartRef} />
          </div>}
        {this.state.dialogData &&
          <GeneralDialog open maxWidth='sm' onClose={this.handleDialogOnClose}>
            <Typography><b>Maakunta:</b> {this.state.dialogData[0].selectedProvinceLabel}</Typography>
            <Typography><b>Aikakausi:</b> {this.state.dialogData[0].selectedPeriodLabel}</Typography>
            <InstaceList
              data={this.state.dialogData}
              listHeadingSingleInstance={this.props.listHeadingSingleInstance}
              listHeadingMultipleInstances={this.props.listHeadingMultipleInstances}
            />
          </GeneralDialog>}
      </div>
    )
  }
}

ApexChart.propTypes = {
  fetchData: PropTypes.func.isRequired,
  resultClass: PropTypes.string,
  facetClass: PropTypes.string
}

export const ApexChartComponent = ApexChart

export default withStyles(styles)(ApexChart)