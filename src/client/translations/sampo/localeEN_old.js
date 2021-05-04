export default {
  languageLabel: 'English',
  html: {
    title: 'Sampo-UI – A framework for building user interfaces for semantic portals',
    description: `The Sampo-UI framework makes it possible to create highly customizable, 
      user-friendly, and responsive user interfaces using current state-of-the-art JavaScript 
      libraries and data from SPARQL endpoints.`
  },
  appTitle: {
    short: 'Sampo-UI',
    long: ' &nbsp; &nbsp; Sampo-UI  &nbsp;  &nbsp;',
    subheading: `
      "Here to forge for us the Sampo, Hammer us the lid in colors"
    `
  },
  appDescription: `
    
  `,
  appDescription1: `
    Sampo is a web service for searching and studying place names. The search results
    can be viewed as a table, on maps, and as statistical distributions. 
    Historical and current background maps are provided.
  `,
  appDescription2: `
    Start by choosing source dataset(s) and input a place name on the search field.
    Alternatively you can search by area. 
  `,
  appDescription3: `
    
  `,
  appDescription4: `
  
  `,
  selectPerspective: 'Select a perspective to search and browse the knowledge graph:',
  mainPageImageLicence: 'Images used under license from Shutterstock.com',
  backendErrorText: 'One of the backend services is not available at the moment. Please try again later.',
  topBar: {
    feedback: 'feedback',
    info: {
      info: 'Info',
      blog: 'Project blog',
      blogUrl: 'https://seco.cs.aalto.fi',
      aboutThePortal: 'About the Portal'
    },
    searchBarPlaceHolder: 'Search all content',
    searchBarPlaceHolderShort: 'Search',
    instructions: 'instructions'
  },
  facetBar: {
    results: 'Results',
    activeFilters: 'Active filters:',
    removeAllFilters: 'Remove all',
    narrowDownBy: 'Narrow down by',
    filterOptions: 'Filter options',
    filterByName: 'Filter by name',
    filterByBoundingBox: 'Filter by bounding box',
    selectionOptions: 'Selection options',
    selectAlsoSubconcepts: 'Automatically select all subconcepts',
    doNotSelectSubconcepts: 'Do not select subconcepts',
    sortingOptions: 'Sorting options',
    sortAlphabetically: 'Sort alphabetically',
    sortByNumberOfSearchResults: 'Sort by number of search results',
    useDisjunction: 'Use logical OR between selections',
    useConjuction: 'Use logical AND between selections',
    minYear: 'Min year',
    maxYear: 'Max year',
    min: 'Min',
    max: 'Max',
    facetSearchFieldPlaceholder: 'Search...',
    applyFacetSelection: 'apply',
    pieChart: {
      tooltip: 'Pie chart'
    },
    barChart: {
      tooltip: 'Bar chart',
      language: {
        title: 'Language',
        xaxisTitle: 'Language',
        yaxisTitle: 'Manuscript count',
        seriesTitle: 'Manuscript count'
      }
    },
    lineChart: {
      tooltip: 'Line chart',
      productionTimespan: {
        title: 'Manuscript production by decade',
        xaxisTitle: 'Decade',
        yaxisTitle: 'Manuscript count',
        seriesTitle: 'Manuscript count'
      }
    }
  },
  tabs: {
    table: 'table',
    map: 'map',
    production_places: 'production places',
    production_places_heatmap: 'production heatmap',
    last_known_locations: 'last known locations',
    migrations: 'migrations',
    network: 'network',
    export: 'export',
    production_dates: 'production dates',
    event_dates: 'event dates',
    map_clusters: 'clustered map',
    map_markers: 'map',
    heatmap: 'heatmap',
    statistics: 'statistics',
    emloLetterNetwork: 'Network of letters',
    emloSentReceived: 'Sent and received letters',
    download: 'download',
    recommendations: 'recommendations'
  },
  table: {
    rowsPerPage: 'Rows per page',
    of: 'of'
  },
  lineChart: {
    productionCount: 'Production',
    transferCount: 'Transfer of custody',
    observationCount: 'Observation',
    sentCount: 'Sent',
    receivedCount: 'Received',
    allCount: 'All'
  },
  exportToYasgui: 'open the result table query in yasgui sparql editor',
  openInLinkedDataBrowser: 'open in linked data browser',
  resultsAsCSV: 'download the search results as a CSV table',
  facets: {
    dateFacet: {
      invalidDate: 'Epäkelpo päivämäärä.',
      toBeforeFrom: 'Alkupäivämäärän täytyy olla ennen loppupäivämäärää.',
      minDate: 'Aikaisin sallittu päivämäärä on {minDate}',
      maxDate: 'Myöhäisin sallittu päivämäärä on {maxDate}',
      cancel: 'Peruuta',
      fromLabel: 'Alku',
      toLabel: 'Loppu'
    },
    textFacet: {
      inputLabel: 'Etsi nimellä'
    },
    sliderFacet: {
      invalidStartOrEnd: 'Min value must be smaller than max value. The smallest value can be {min} and the largest value can be {max}.'
    }
  },
  leafletMap: {
    basemaps: {
      mapbox: {
        'light-v10': 'Mapbox Light'
      },
      googleRoadmap: 'Google Maps',
      topographicalMapNLS: 'Topographical map (National Land Survey of Finland)',
      backgroundMapNLS: 'Background map (National Land Survey of Finland)'
    },
    externalLayers: {
      arkeologiset_kohteet_alue: 'Register of Archaeological Sites, areas (Finnish Heritage Agency)',
      arkeologiset_kohteet_piste: 'Register of Archaeological Sites, points (Finnish Heritage Agency)',
      fhaLidar: 'Elevation model (Finnish Heritage Agency)',
      karelianMaps: 'Karelian maps, 1:100 000 topographic (SeCo)',
      senateAtlas: 'Senate atlas, 1:21 000 topographic (SeCo)',
      'kotus:pitajat': 'Finnish parishes in 1938 (Institute for the Languages of Finland)',
      'kotus:rajat-sms-alueet': 'Dialectical regions in Finland (Institute for the Languages of Finland)',
      'kotus:rajat-sms-alueosat': 'Dialectical subregions in Finland (Institute for the Languages of Finland)',
      'kotus:rajat-lansi-ita': 'Border between western and eastern dialects in Finland (Institute for the Languages of Finland)'
    },
    mapModeButtons: {
      markers: 'Markers',
      heatmap: 'Heatmap'
    },
    wrongZoomLevel: 'The map zoom level has to at least 11',
    wrongZoomLevelFHA: 'The map zoom level has to be at least 13 in order to show this layer',
    tooManyResults: 'More than 3000 results, please use clustered map or heatmap'
  },
  instancePageGeneral: {
    introduction: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        This landing page provides a human-readable summary of the data points that link
        to this {entity}. The data included in this summary reflect only those data points
        used in the MMM Portal. Click the Open in Linked Data Browser on button on the
        Export tab to view the complete set of classes and properties linked to this record.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        To cite this record, use its url. You can use also use the url to return directly
        to the record at any time.
      </p>
    `,
    repetition: `
      <h6 class="MuiTypography-root MuiTypography-h6">
        Repetition of data
      </h6>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        The same or similar data may appear within a single data field multiple times.
        This repetition occurs due to the merging of multiple records from different datasets
        to create the MMM record.
      </p>
    `
  },
  deckGlMap: {
    arcColouring: 'Arc colouring:',
    showMoreInformation: 'Click to show more information.',
    manuscriptMigrations: {
      legendTitle: 'Arc colouring',
      legendFrom: 'Manuscript production place',
      legendTo: 'Last known location',
      from: 'Production place:',
      to: 'Last known location:',
      count: 'Manuscript count',
      listHeadingSingleInstance: 'Manuscript:',
      listHeadingMultipleInstances: 'Manuscripts:'
    }
  },
  perspectives: {
    perspective1: {
      label: 'Perspective 1',
      facetResultsType: 'manuscripts',
      shortDescription: 'Perspective1 description',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to physical manuscript objects.
          If two or more source datasets include the same manuscript and
          this has been verified, the information from the source datasets has been merged
          into one manuscript. See <a href="/instructions">instructions</a> for using the
          filters. The result view can be selected using the tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes all manuscripts in
            the MMM data. One table row is equivalent to one manuscript.
          </li>
          <li>
            <strong>PRODUCTION PLACES</STRONG> view visualizes the connection
            between manuscripts and the places where they were produced.
          </li>
          <li>
            <strong>MIGRATIONS</strong> view visualizes the migration of a
            manuscript from place of production to its most recently observed location.
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Manuscript',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            MMM’s Manuscript entity corresponds to
            <a href='https://www.ifla.org/publications/node/11240' target='_blank' rel='noopener noreferrer'>FRBRoo’s</a>
            Manifestation Singleton, defined as "physical objects that each carry an instance of
            [an Expression], and that were produced as unique objects..." The various types
            of records that describe manuscripts in each of the three contributing MMM
            datasets have been mapped to this entity.
          </p>
          <h6 class="MuiTypography-root MuiTypography-h6">
            Manuscript labels
          </h6>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            If the Bibale or Oxford databases reference a shelf mark for the manuscript,
            that information will appear as its label. Otherwise, an SDBM ID number will serve
            as its label. SDBM ID numbers contain prefixes that indicate different things about
            the type of record they contain:
          </p>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              SDBM_MS: SDBM Manuscript Record, which aggregates the data of two or more SDBM
              Entries. Each Entry represents a different observation of a manuscript at a different
              point in time, derived from various sources.
            </li>
            <li>
              SDBM_MS_orphan: a single Entry in the SDBM, meaning it has not been linked to any
              other Entries and therefore has no SDBM Manuscript Record.
            </li>
            <li>
              SDBM_MS_part: a record identified as a fragment of a larger manuscript.
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Label',
          description: 'A short label describing the manuscript.',
          textFacetInputPlaceholder: 'Search...'
        },
        author: {
          label: 'Author',
          description: `
            The author(s) who have contributed to the intellectual content (works)
            contained in the manuscript.
          `
        },
        work: {
          label: 'Work',
          description: 'The intellectual content (works) contained in the manuscript.'
        },
        expression: {
          label: 'Expression',
          description: 'The linguistic versions of the works contained in the manuscript.'
        },
        productionPlace: {
          label: 'Production place',
          description: `
            The location where the manuscript was written. Multiple production places
            may appear for a single manuscript due to the following reasons:  1) there
            are discrepancies in the contributing data source,  2) there are discrepancies
            between several contributing data sources, 3) the precise date is uncertain,
            4) the production indeed took place on several occasions (e.g. for composite
            manuscripts).
          `
        },
        productionTimespan: {
          label: 'Production date',
          description: `
            The date when the manuscript was written. Multiple production dates may appear
            for a single manuscript due to the following reasons:  1) there are discrepancies
            in the contributing data source,  2) there are discrepancies between several
            contributing data sources, 3) the precise date is uncertain, 4) the production
            indeed took place on several occasions (e.g. for composite manuscripts).
          `
        },
        note: {
          label: 'Note',
          description: `
            Other info such as distinguishing characteristics, notes on the physical structure
            of the manuscript, script types, note glosses, physical relationships among various
            texts and/or parts of a miscellany, such as multiple types of page layout.
          `
        },
        language: {
          label: 'Language',
          description: `
            The language(s) in which the manuscript was written.
          `
        },
        event: {
          label: 'Event',
          description: `
            Events related to the manuscript.
          `
        },
        owner: {
          label: 'Owner',
          description: `
            Former or current owners (individual or institutional).
          `
        },
        collection: {
          label: 'Collection',
          description: `
            The collection(s) that the manuscript has been part of at some point in time.
          `
        },
        transferOfCustodyPlace: {
          label: 'Transfer of Custody Place',
          description: `
            The locations of “Transfer of Custody” events related to the manuscript.
          `
        },
        transferOfCustodyTimespan: {
          label: 'Transfer of Custody Date',
          description: `
            The dates of “Transfer of Custody” events related to the manuscript.
          `
        },
        lastKnownLocation: {
          label: 'Last known location',
          description: `
            Last known location
          `
        },
        material: {
          label: 'Material',
          description: `
            The physical material on which the text is written.
          `
        },
        height: {
          label: 'Height',
          description: `
            The height of the manuscript in millimeters.
          `
        },
        width: {
          label: 'Width',
          description: `
            The width of the manuscript in millimeters.
          `
        },
        folios: {
          label: 'Folios',
          description: `
            The number of folios (leaves).
          `
        },
        lines: {
          label: 'Lines',
          description: `
            The number of lines in a text block. Left blank if the number of lines
            occurring throughout the manuscript is too irregular to be a useful
            descriptor for searching.
          `
        },
        columns: {
          label: 'Columns',
          description: `
            The number of columns. Left blank if the number of columns
            occurring throughout the manuscript is too irregular to be a useful
            descriptor for searching.
          `
        },
        miniatures: {
          label: 'Miniatures',
          description: `
            The number of miniatures.
          `
        },
        decoratedInitials: {
          label: 'Decorated initials',
          description: `
            The number of decorated initials.
          `
        },
        historiatedInitials: {
          label: 'Historiated initials',
          description: `
            The number of historiated initials.
          `
        },
        source: {
          label: 'Source',
          description: `
            The source dataset(s) (Bibale, Bodleian, or SDBM) contributing the
            information on the manuscript. If two or more source datasets include
            the same manuscript and this has been manually verified, the information
            from the source datasets have been merged into one manuscript (table row).
             Click on the links to view the original record on the source’s website.
          `
        }
      }
    },
    perspective2: {
      label: 'Perspective 2',
      facetResultsType: 'works',
      shortDescription: 'Perspective 2 description',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to Works. The MMM data model follows
          the <a href='https://www.ifla.org/publications/node/11240' target='_blank' rel='noopener noreferrer'>FRBRoo</a>
          definition of a work, which refers to “distinct concepts or combinations
          of concepts identified in artistic and intellectual expressions.” Works
          contain title and author information. If two or more source
          datasets include the same Work and this has been verified, the information
          from the source datasets has been merged into one Work.  See
          <a href="/instructions">instructions</a> for using the filters.
          The result view can be selected using the tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view gives you a list of specific works, and
            the manuscripts and manuscript collections in which they can be found.
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Work',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            The MMM data model follows the
            <a href='https://www.ifla.org/publications/node/11240' target='_blank' rel='noopener noreferrer'>FRBRoo</a>
            definition of a work, which refers to
            “distinct concepts or combinations of concepts identified in artistic and
            intellectual expressions.” Works contain title and author information.
            This definition is not shared by the Bibale or Oxford Libraries’ conception
            of the term, which both define their internal “work” concept more closely to
            the FRBRoo conception of an Expression. The SDBM does not have a work concept
            at all, recording only the titles of the texts as given in its various sources,
            without normalizing that data or linking it directly to author information.
            Works were generated within the MMM dataset by manually creating links across
            the three datasets’ various conceptions of the relationship between authors
            and their creations. This process was not able to reconcile every work
            contained within the combined dataset.
          </p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Title',
          description: 'The name or title of the Work.',
          textFacetInputPlaceholder: 'Search...'
        },
        author: {
          label: 'Possible author',
          description: `
            The author(s) associated with the Work. Because of the structure of
            entries in the Schoenberg Database, the authors shown as being
            associated with a Work may actually be associated with other
            Works in the same manuscript instead.
          `
        },
        language: {
          label: 'Language',
          description: `
            The language in which a Work is written in the manuscript
            (i.e., an “Expression” of a Work). One manuscript may contain multiple languages.
          `
        },
        expression: {
          label: 'Expression',
          description: `
            The expression(s) of the Work.
          `
        },
        manuscript: {
          label: 'Manuscript',
          description: `
            The specific manuscript(s) in which the Work can be found.
          `
        },
        productionTimespan: {
          label: 'Manuscript production date',
          description: `
            The date(s) when the manuscript(s) in which the Work can be found were written.
            Multiple production dates may appear for a single manuscript,
            when there are discrepancies between the contributing data source
            or when the precise date is uncertain.
          `
        },
        collection: {
          label: 'Collection',
          description: `
            The specific collection(s) of manuscripts in which a Work can be found.
          `
        },
        source: {
          label: 'Source',
          description: `
            The source database(s) (Schoenberg, Bibale, and Bodleian) that the Work
            occurs in. Click on the result table link to view the original record on the
            source’s website.
          `
        }
      }
    },
    perspective3: {
      label: 'Perspective 3',
      facetResultsType: 'events',
      shortDescription: 'Perspective 3 description',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to events associated with the
          histories of manuscripts and manuscript collections over the centuries.
          See <a href="/instructions">instructions</a> for using the filters.
          The result view can be selected using the tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes all events in the MMM data.
          </li>
          <li>
            <strong>MAP</STRONG> view visualizes the events that have location information on a map.
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Event',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Events refer to various activities related to Manuscripts and Actors. Event
            types include Production, Transfer of Custody, and Activity events.
            Production events refer to the production of the physical manuscript.
            Transfer of Custody events indicate a change of ownership that involved
            a transaction of some kind, usually through an auction house or bookseller.
            The generic Activity event type covers all other types of events.
          </p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        type: {
          label: 'Type',
          description: `
            Distinguish between “Transfer of Custody”, “Production”, and other
            types of “Activity” events.
          `
        },
        language: {
          label: 'Language',
          description: `
            The language in which a Work is written in the manuscript
            (i.e., an “Expression” of a Work). One manuscript may contain multiple languages.
          `
        },
        manuscript: {
          label: 'Manuscript / Collection',
          description: `
            The manuscript or manuscript collection associated with the event.
          `
        },
        eventTimespan: {
          label: 'Date',
          description: `
            The date or time period associated with the event.
          `
        },
        place: {
          label: 'Place',
          description: `
            The specific place(s) associated with the event.
          `
        },
        placeType: {
          label: 'Place type',
          description: `
            The type of the specific place(s) associated with the event.
          `
        },
        note: {
          label: 'Note',
          description: `
            Note
          `
        },
        surrender: {
          label: 'Custody surrendered by',
          description: `
            Custody surrendered by
          `
        },
        receiver: {
          label: 'Custody received by',
          description: `
            Custody received by
          `
        },
        observedOwner: {
          label: 'Observed owner',
          description: `
            Observed owner
          `
        },
        source: {
          label: 'Source',
          description: `
            The source database (Schoenberg, Bibale, and Bodleian) that provided
            the information about the event.
          `
        }
      }
    },
    manuscripts: {
      label: 'Manuscripts',
      facetResultsType: 'manuscripts',
      shortDescription: 'Physical manuscript objects',
      longDescription: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Use this perspective to access data related to physical manuscript objects.
            If two or more source datasets include the same manuscript and
            this has been verified, the information from the source datasets has been merged
            into one manuscript. See <a href="/instructions">instructions</a> for using the
            filters. The result view can be selected using the tabs:
          </p>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TABLE</STRONG> view includes all manuscripts in
              the MMM data. One table row is equivalent to one manuscript.
            </li>
            <li>
              <strong>PRODUCTION PLACES</STRONG> view visualizes the connection
              between manuscripts and the places where they were produced.
            </li>
            <li>
              <strong>MIGRATIONS</strong> view visualizes the migration of a
              manuscript from place of production to its most recently observed location.
            </li>
            <li>
              <strong>EXPORT</strong> the SPARQL query used to generate the result
              table view into YASGUI query editor.
            </li>
          </ul>
        `,
      instancePage: {
        label: 'Manuscript',
        description: `
            <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
              MMM’s Manuscript entity corresponds to
              <a href='https://www.ifla.org/publications/node/11240' target='_blank' rel='noopener noreferrer'>FRBRoo’s</a>
              Manifestation Singleton, defined as "physical objects that each carry an instance of
              [an Expression], and that were produced as unique objects..." The various types
              of records that describe manuscripts in each of the three contributing MMM
              datasets have been mapped to this entity.
            </p>
            <h6 class="MuiTypography-root MuiTypography-h6">
              Manuscript labels
            </h6>
            <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
              If the Bibale or Oxford databases reference a shelf mark for the manuscript,
              that information will appear as its label. Otherwise, an SDBM ID number will serve
              as its label. SDBM ID numbers contain prefixes that indicate different things about
              the type of record they contain:
            </p>
            <ul class="MuiTypography-root MuiTypography-body1">
              <li>
                SDBM_MS: SDBM Manuscript Record, which aggregates the data of two or more SDBM
                Entries. Each Entry represents a different observation of a manuscript at a different
                point in time, derived from various sources.
              </li>
              <li>
                SDBM_MS_orphan: a single Entry in the SDBM, meaning it has not been linked to any
                other Entries and therefore has no SDBM Manuscript Record.
              </li>
              <li>
                SDBM_MS_part: a record identified as a fragment of a larger manuscript.
              </li>
            </ul>
            <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
          `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Label',
          description: 'A short label describing the manuscript.'
        },
        author: {
          label: 'Author',
          description: `
              The author(s) who have contributed to the intellectual content (works)
              contained in the manuscript.
            `
        },
        work: {
          label: 'Work',
          description: 'The intellectual content (works) contained in the manuscript.'
        },
        expression: {
          label: 'Expression',
          description: 'The linguistic versions of the works contained in the manuscript.'
        },
        productionPlace: {
          label: 'Production place',
          description: `
              The location where the manuscript was written. Multiple production places
              may appear for a single manuscript due to the following reasons:  1) there
              are discrepancies in the contributing data source,  2) there are discrepancies
              between several contributing data sources, 3) the precise date is uncertain,
              4) the production indeed took place on several occasions (e.g. for composite
              manuscripts).
            `
        },
        productionTimespan: {
          label: 'Production date',
          description: `
              The date when the manuscript was written. Multiple production dates may appear
              for a single manuscript due to the following reasons:  1) there are discrepancies
              in the contributing data source,  2) there are discrepancies between several
              contributing data sources, 3) the precise date is uncertain, 4) the production
              indeed took place on several occasions (e.g. for composite manuscripts).
            `
        },
        note: {
          label: 'Note',
          description: `
              Other info such as distinguishing characteristics, notes on the physical structure
              of the manuscript, script types, note glosses, physical relationships among various
              texts and/or parts of a miscellany, such as multiple types of page layout.
            `
        },
        language: {
          label: 'Language',
          description: `
              The language(s) in which the manuscript was written.
            `
        },
        event: {
          label: 'Event',
          description: `
              Events related to the manuscript.
            `
        },
        owner: {
          label: 'Owner',
          description: `
              Former or current owners (individual or institutional).
            `
        },
        collection: {
          label: 'Collection',
          description: `
              The collection(s) that the manuscript has been part of at some point in time.
            `
        },
        transferOfCustodyPlace: {
          label: 'Transfer of Custody Place',
          description: `
              The locations of “Transfer of Custody” events related to the manuscript.
            `
        },
        transferOfCustodyTimespan: {
          label: 'Transfer of Custody Date',
          description: `
              The dates of “Transfer of Custody” events related to the manuscript.
            `
        },
        lastKnownLocation: {
          label: 'Last known location',
          description: `
              Last known location
            `
        },
        material: {
          label: 'Material',
          description: `
              The physical material on which the text is written.
            `
        },
        height: {
          label: 'Height',
          description: `
              The height of the manuscript in millimeters.
            `
        },
        width: {
          label: 'Width',
          description: `
              The width of the manuscript in millimeters.
            `
        },
        folios: {
          label: 'Folios',
          description: `
              The number of folios (leaves).
            `
        },
        lines: {
          label: 'Lines',
          description: `
              The number of lines in a text block. Left blank if the number of lines
              occurring throughout the manuscript is too irregular to be a useful
              descriptor for searching.
            `
        },
        columns: {
          label: 'Columns',
          description: `
              The number of columns. Left blank if the number of columns
              occurring throughout the manuscript is too irregular to be a useful
              descriptor for searching.
            `
        },
        miniatures: {
          label: 'Miniatures',
          description: `
              The number of miniatures.
            `
        },
        decoratedInitials: {
          label: 'Decorated initials',
          description: `
              The number of decorated initials.
            `
        },
        historiatedInitials: {
          label: 'Historiated initials',
          description: `
              The number of historiated initials.
            `
        },
        source: {
          label: 'Source',
          description: `
              The source dataset(s) (Bibale, Bodleian, or SDBM) contributing the
              information on the manuscript. If two or more source datasets include
              the same manuscript and this has been manually verified, the information
              from the source datasets have been merged into one manuscript (table row).
               Click on the links to view the original record on the source’s website.
            `
        }
      }
    },
    works: {
      label: 'Works',
      facetResultsType: 'works',
      shortDescription: 'Intellectual content of manuscripts',
      longDescription: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Use this perspective to access data related to Works. The MMM data model follows
            the <a href='https://www.ifla.org/publications/node/11240' target='_blank' rel='noopener noreferrer'>FRBRoo</a>
            definition of a work, which refers to “distinct concepts or combinations
            of concepts identified in artistic and intellectual expressions.” Works
            contain title and author information. If two or more source
            datasets include the same Work and this has been verified, the information
            from the source datasets has been merged into one Work.  See
            <a href="/instructions">instructions</a> for using the filters.
            The result view can be selected using the tabs:
          </p>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TABLE</STRONG> view gives you a list of specific works, and
              the manuscripts and manuscript collections in which they can be found.
            </li>
            <li>
              <strong>EXPORT</strong> the SPARQL query used to generate the result
              table view into YASGUI query editor.
            </li>
          </ul>
        `,
      instancePage: {
        label: 'Work',
        description: `
            <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
              The MMM data model follows the
              <a href='https://www.ifla.org/publications/node/11240' target='_blank' rel='noopener noreferrer'>FRBRoo</a>
              definition of a work, which refers to
              “distinct concepts or combinations of concepts identified in artistic and
              intellectual expressions.” Works contain title and author information.
              This definition is not shared by the Bibale or Oxford Libraries’ conception
              of the term, which both define their internal “work” concept more closely to
              the FRBRoo conception of an Expression. The SDBM does not have a work concept
              at all, recording only the titles of the texts as given in its various sources,
              without normalizing that data or linking it directly to author information.
              Works were generated within the MMM dataset by manually creating links across
              the three datasets’ various conceptions of the relationship between authors
              and their creations. This process was not able to reconcile every work
              contained within the combined dataset.
            </p>
          `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Title',
          description: 'The name or title of the Work.'
        },
        author: {
          label: 'Possible author',
          description: `
              The author(s) associated with the Work. Because of the structure of
              entries in the Schoenberg Database, the authors shown as being
              associated with a Work may actually be associated with other
              Works in the same manuscript instead.
            `
        },
        language: {
          label: 'Language',
          description: `
              The language in which a Work is written in the manuscript
              (i.e., an “Expression” of a Work). One manuscript may contain multiple languages.
            `
        },
        expression: {
          label: 'Expression',
          description: `
              The expression(s) of the Work.
            `
        },
        manuscript: {
          label: 'Manuscript',
          description: `
              The specific manuscript(s) in which the Work can be found.
            `
        },
        productionTimespan: {
          label: 'Manuscript production date',
          description: `
              The date(s) when the manuscript(s) in which the Work can be found were written.
              Multiple production dates may appear for a single manuscript,
              when there are discrepancies between the contributing data source
              or when the precise date is uncertain.
            `
        },
        collection: {
          label: 'Collection',
          description: `
              The specific collection(s) of manuscripts in which a Work can be found.
            `
        },
        source: {
          label: 'Source',
          description: `
              The source database(s) (Schoenberg, Bibale, and Bodleian) that the Work
              occurs in. Click on the result table link to view the original record on the
              source’s website.
            `
        }
      }
    },
    events: {
      label: 'Events',
      facetResultsType: 'events',
      shortDescription: 'Events related to manuscripts',
      longDescription: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Use this perspective to access data related to events associated with the
            histories of manuscripts and manuscript collections over the centuries.
            See <a href="/instructions">instructions</a> for using the filters.
            The result view can be selected using the tabs:
          </p>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TABLE</STRONG> view includes all events in the MMM data.
            </li>
            <li>
              <strong>MAP</STRONG> view visualizes the events that have location information on a map.
            </li>
            <li>
              <strong>EXPORT</strong> the SPARQL query used to generate the result
              table view into YASGUI query editor.
            </li>
          </ul>
        `,
      instancePage: {
        label: 'Event',
        description: `
            <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
              Events refer to various activities related to Manuscripts and Actors. Event
              types include Production, Transfer of Custody, and Activity events.
              Production events refer to the production of the physical manuscript.
              Transfer of Custody events indicate a change of ownership that involved
              a transaction of some kind, usually through an auction house or bookseller.
              The generic Activity event type covers all other types of events.
            </p>
          `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        type: {
          label: 'Type',
          description: `
              Distinguish between “Transfer of Custody”, “Production”, and other
              types of “Activity” events.
            `
        },
        language: {
          label: 'Language',
          description: `
              The language in which a Work is written in the manuscript
              (i.e., an “Expression” of a Work). One manuscript may contain multiple languages.
            `
        },
        manuscript: {
          label: 'Manuscript / Collection',
          description: `
              The manuscript or manuscript collection associated with the event.
            `
        },
        eventTimespan: {
          label: 'Date',
          description: `
              The date or time period associated with the event.
            `
        },
        place: {
          label: 'Place',
          description: `
              The specific place(s) associated with the event.
            `
        },
        note: {
          label: 'Note',
          description: `
              Note
            `
        },
        surrender: {
          label: 'Custody surrendered by',
          description: `
              Custody surrendered by
            `
        },
        receiver: {
          label: 'Custody received by',
          description: `
              Custody received by
            `
        },
        observedOwner: {
          label: 'Observed owner',
          description: `
              Observed owner
            `
        },
        source: {
          label: 'Source',
          description: `
              The source database (Schoenberg, Bibale, and Bodleian) that provided
              the information about the event.
            `
        }
      }
    },
    actors: {
      label: 'Actors',
      facetResultsType: 'actors',
      shortDescription: 'People and institutions related to manuscripts',
      longDescription: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            This perspective provides access to data related to the persons and institutions
            who impacted the production or dissemination of manuscripts and works.
            Actors include authors of works, artists and scribes who produced manuscripts,
            and the individual owners and institutions who bought or sold manuscripts.
            If two or more source datasets include the same Actor and this has been verified,
            the information from the source datasets has been merged into one Actor.
            See <a href="/instructions">instructions</a> for using the filters.
            The result view can be selected using the tabs:
          </p>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TABLE</STRONG> view includes all Actors in the MMM data.
            </li>
            <li>
              <strong>MAP</STRONG> view visualizes the connection between Actors
              and the places where they lived or were located.
            </li>
            <li>
              <strong>EXPORT</strong> the SPARQL query used to generate the result
              table view into YASGUI query editor.
            </li>
          </ul>
        `,
      instancePage: {
        label: 'Actor',
        description: `
            <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
              Actors are individuals or groups who influenced the production or provenance
              of a manuscript. Actor types include Person, Group, or Actor. Persons refer to
              individuals, while Groups indicate corporate or institutional bodies.
              The Actor type is used when a more specific type is unknown or not specified
              in the source dataset.
            </p>
          `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Name',
          description: `
              The standardized name of the actor.
            `
        },
        type: {
          label: 'Type',
          description: `
              Indicates whether the actor is an individual (Person) or an institution,
              corporation, or family (Group)
            `
        },
        birthDateTimespan: {
          label: 'Birth / formation date',
          description: `
              The date when the actor was born or established.
            `
        },
        deathDateTimespan: {
          label: 'Death / dissolution date',
          description: `
              The date when the actor died or dissolved.
            `
        },
        place: {
          label: 'Activity location',
          description: `
              Place(s) of activity linked to this actor.
            `
        },
        work: {
          label: 'Work',
          description: `
              Work(s) linked to the actor.
            `
        },
        manuscript: {
          label: 'Manuscript',
          description: `
              Manuscript(s) linked to the actor.
            `
        },
        role: {
          label: 'Role',
          description: `
              Role(s)
            `
        },
        source: {
          label: 'Source',
          description: `
              The source dataset(s) (Bibale, Bodleian, or SDBM) contributing the
              information on the actor. If two or more source datasets include the
              same actor and this has been manually verified, the information from
              the source datasets has been merged into one MMM actor.
              Click on the result table link(s) to view the original record on the
              source’s website.
            `
        }
      }
    },
    places: {
      label: 'Places',
      facetResultsType: 'places',
      shortDescription: 'Places related to manuscripts',
      longDescription: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Use this perspective to access data related to places named in the source datasets
            (Schoenberg, Bibale, and Bodleian). The places have been linked to Getty Thesaurus
            of Geographic Names when possible. If two or more source datasets include the same
            Place and this has been verified, the information from the source datasets has been
            merged into one Place. See <a href="/instructions">instructions</a> for using the filters.
            The result view can be selected using the tabs:
          </p>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TABLE</STRONG> view includes all Places in the MMM data.
            </li>
            <li>
              <strong>MAP</STRONG> view shows all Places that have coordinates.
            </li>
            <li>
              <strong>EXPORT</strong> the SPARQL query used to generate the result
              table view into YASGUI query editor.
            </li>
          </ul>
        `,
      instancePage: {
        label: 'Place',
        description: `
            <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
              Places refer to geographic locations that relate to Manuscripts, Events, Actors, and
              Collections. MMM uses the Getty Thesaurus of Geographic Names as its hierarchy for
              geographic data. Coordinate data is approximate for locations such as counties,
              regions, and nations.
            </p>
          `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Name',
          description: `
              The name of the place.
            `
        },
        placeType: {
          label: 'Place type',
          description: `
              The place type from Getty Thesaurus of Geographic Names.
            `
        },
        area: {
          label: 'Parent Place',
          description: `
              A larger region or geographic division in which a place is contained.
              MMM uses the hierarchy published by the Getty Thesaurus of Geographic Names.
            `
        },
        manuscriptProduced: {
          label: 'Manuscripts produced',
          description: `
              Manuscript(s) produced here.
            `
        },
        manuscriptTransferred: {
          label: 'Manuscripts transferred',
          description: `
              The manuscript(s) that have a "Transfer of Custody" event located here.
            `
        },
        manuscriptObserved: {
          label: 'Manuscripts observed',
          description: `
              The manuscript(s) that have a provenance event located here.
            `
        },
        actor: {
          label: 'Actor',
          description: `
              The actor(s) associated with the place.
            `
        },
        source: {
          label: 'Source',
          description: `
              The source dataset (Schoenberg, Bibale, and Bodleian) and the place
              authority (Getty Thesaurus of Geographic Names and GeoNames)
              contributing the information on the place.
            `
        }
      }
    },
    collections: {
      label: '',
      facetResultsType: '',
      shortDescription: '',
      longDescription: `
        `,
      instancePage: {
        label: 'Collection',
        description: `
            <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
              A collection refers to a group of manuscripts that were owned by the same actor,
              including individuals, institutions, or other types of groups. A manuscript can
              appear in multiple collections over time, and no explicit distinction
              is made between a manuscript’s current or former collections. Similarly,
              collections will include links to every manuscript that has ever been in
              the collection, regardless of whether all of those manuscripts were within
              the collection at the same time.
            </p>
          `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Name',
          description: `
              The name or title of the Collection.
            `
        },
        manuscript: {
          label: 'Manuscript',
          description: `
              The manuscript(s) that have been a part of the collection at some
              point in time.
            `
        },
        owner: {
          label: 'Owner',
          description: `
              Former or current owners (individual or institutional).
            `
        },
        place: {
          label: 'Place',
          description: `
              Location of the collection at some point during its existence
            `
        },
        source: {
          label: 'Source',
          description: `
              The source database (Schoenberg, Bibale, and Bodleian) that the Collection
              occurs in. Currently one Collection has always only one dataset as a source.
            `
        }
      }
    },
    expressions: {
      label: '',
      facetResultsType: '',
      shortDescription: '',
      longDescription: `
        `,
      instancePage: {
        label: 'Expression',
        description: `
            <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
              The MMM data model follows the
              <a href='https://www.ifla.org/publications/node/11240' target='_blank' rel='noopener noreferrer'>FRBRoo</a>
              definition of an Expression, which
              refers to “the intellectual or artistic realisations of works in the form
              of identifiable immaterial objects...” Expressions contain title,
              and language information, and represent the various versions of texts that
              appear in manuscripts.
            </p>
          `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Name',
          description: `
              The name or title of the Expression.
            `
        },
        manuscript: {
          label: 'Manuscript',
          description: `
              The manuscript that carries the Expression.
            `
        },
        language: {
          label: 'Language',
          description: `
              The language of the Expression.
            `
        },
        source: {
          label: 'Source',
          description: `
              The source database (Schoenberg, Bibale, and Bodleian) that the Expression
              occurs in. Currently one Expression has always only one dataset as a source.
            `
        }
      }
    },
    finds: {
      label: 'Archaeological finds',
      facetResultsType: 'finds',
      shortDescription: 'Data provided by the Finnish Heritage Agency',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to physical manuscript objects.
          If two or more source datasets include the same manuscript and
          this has been verified, the information from the source datasets has been merged
          into one manuscript. See <a href="/instructions">instructions</a> for using the
          filters. The result view can be selected using the tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes all manuscripts in
            the MMM data. One table row is equivalent to one manuscript.
          </li>
          <li>
            <strong>PRODUCTION PLACES</STRONG> view visualizes the connection
            between manuscripts and the places where they were produced.
          </li>
          <li>
            <strong>MIGRATIONS</strong> view visualizes the migration of a
            manuscript from place of production to its most recently observed location.
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Archaeological find',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            MMM’s Manuscript entity corresponds to
            <a href='https://www.ifla.org/publications/node/11240' target='_blank' rel='noopener noreferrer'>FRBRoo’s</a>
            Manifestation Singleton, defined as "physical objects that each carry an instance of
            [an Expression], and that were produced as unique objects..." The various types
            of records that describe manuscripts in each of the three contributing MMM
            datasets have been mapped to this entity.
          </p>
          <h6 class="MuiTypography-root MuiTypography-h6">
            Manuscript labels
          </h6>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            If the Bibale or Oxford databases reference a shelf mark for the manuscript,
            that information will appear as its label. Otherwise, an SDBM ID number will serve
            as its label. SDBM ID numbers contain prefixes that indicate different things about
            the type of record they contain:
          </p>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              SDBM_MS: SDBM Manuscript Record, which aggregates the data of two or more SDBM
              Entries. Each Entry represents a different observation of a manuscript at a different
              point in time, derived from various sources.
            </li>
            <li>
              SDBM_MS_orphan: a single Entry in the SDBM, meaning it has not been linked to any
              other Entries and therefore has no SDBM Manuscript Record.
            </li>
            <li>
              SDBM_MS_part: a record identified as a fragment of a larger manuscript.
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        findName: {
          label: 'Find name',
          description: 'Find name.'
        },
        specification: {
          label: 'Specification',
          description: 'Specification.'
        },
        prefLabel: {
          label: 'Find name',
          description: 'Find name.'
        },
        type: {
          label: 'Type',
          description: `
            Type.
          `
        },
        subCategory: {
          label: 'Sub category',
          description: `
            Sub category.
          `
        },
        objectSubCategory: {
          label: 'Sub category ontologized',
          description: `
            Sub category using ontology terms.
          `
        },
        material: {
          label: 'Material',
          description: `
            Material.
          `
        },
        materialLiteral: {
          label: 'Material literal',
          description: `
            Material literal.
          `
        },
        period: {
          label: 'Period',
          description: 'Period'
        },
        periodObject: {
          label: 'Period ontologized',
          description: 'Ontologized period. May include both earliest and lates periods.'
        },
        startYear: {
          label: 'Start year',
          description: `
            Start year.
          `
        },
        endYear: {
          label: 'End year',
          description: `
            End year.
          `
        },
        municipality: {
          label: 'Municipality',
          description: `
            Municipality.
          `
        },
        image: {
          label: 'Image',
          description: 'Image description.'
        }
      }
    },
    emloActors: {
      label: 'Actors',
      facetResultsType: 'actors',
      shortDescription: 'Description',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to physical manuscript objects.
          If two or more source datasets include the same manuscript and
          this has been verified, the information from the source datasets has been merged
          into one manuscript. See <a href="/instructions">instructions</a> for using the
          filters. The result view can be selected using the tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes all manuscripts in
            the MMM data. One table row is equivalent to one manuscript.
          </li>
          <li>
            <strong>PRODUCTION PLACES</STRONG> view visualizes the connection
            between manuscripts and the places where they were produced.
          </li>
          <li>
            <strong>MIGRATIONS</strong> view visualizes the migration of a
            manuscript from place of production to its most recently observed location.
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Actor',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            TODO: description.
          </p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Label',
          description: 'A short label describing the manuscript.'
        },
        author: {
          label: 'Author',
          description: `
            The author(s) who have contributed to the intellectual content (works)
            contained in the manuscript.
          `
        },
        gender: {
          label: 'Gender',
          description: 'The gender of a person.'
        },
        type: {
          label: 'Type',
          description: 'The type is a Person or a Group.'
        },
        birthDateTimespan: {
          label: 'Birth date',
          description: `
          Birth date of a person
          `
        },
        deathDateTimespan: {
          label: 'Death date',
          description: `
          Death date of a person
          `
        },
        altLabel: {
          label: 'Alternative names or occupations',
          description: `
            Alternative names or occupations of the actor.
          `
        },
        related: {
          label: 'External links',
          description: `
            External links.
          `
        },
        event: {
          label: 'Event',
          description: `
            Events related to the manuscript.
          `
        },
        owner: {
          label: 'Owner',
          description: `
            Former or current owners (individual or institutional).
          `
        },
        rel: {
          label: 'Related actors',
          description: `
            Related actors, e.g. parents, spouses, acquaintances.
          `
        },
        cor: {
          label: 'Correspondences',
          description: `
            Other actors who have been in correspondence with this actor. 
            The number of mutually sent letters is in parenthesis at end of the label.
          `
        },
        transferOfCustodyTimespan: {
          label: 'Transfer of Custody Date',
          description: `
            The dates of “Transfer of Custody” events related to the manuscript.
          `
        },
        knownLocation: {
          label: 'Known locations',
          description: `
            Known locations by letter correspondence.
          `
        },
        material: {
          label: 'Material',
          description: `
            The physical material on which the text is written.
          `
        },
        height: {
          label: 'Height',
          description: `
            The height of the manuscript in millimeters.
          `
        },
        width: {
          label: 'Width',
          description: `
            The width of the manuscript in millimeters.
          `
        },
        folios: {
          label: 'Folios',
          description: `
            The number of folios (leaves).
          `
        },
        lines: {
          label: 'Lines',
          description: `
            The number of lines in a text block. Left blank if the number of lines
            occurring throughout the manuscript is too irregular to be a useful
            descriptor for searching.
          `
        },
        columns: {
          label: 'Columns',
          description: `
            The number of columns. Left blank if the number of columns
            occurring throughout the manuscript is too irregular to be a useful
            descriptor for searching.
          `
        },
        miniatures: {
          label: 'Miniatures',
          description: `
            The number of miniatures.
          `
        },
        decoratedInitials: {
          label: 'Decorated initials',
          description: `
            The number of decorated initials.
          `
        },
        historiatedInitials: {
          label: 'Historiated initials',
          description: `
            The number of historiated initials.
          `
        },
        source: {
          label: 'Source',
          description: `
            The source dataset(s) (Bibale, Bodleian, or SDBM) contributing the
            information on the manuscript. If two or more source datasets include
            the same manuscript and this has been manually verified, the information
            from the source datasets have been merged into one manuscript (table row).
             Click on the links to view the original record on the source’s website.
          `
        }
      }
    },
    emloLetters: {
      label: 'Letters',
      facetResultsType: 'letters',
      shortDescription: 'Description',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          TODO: description.
        </p>
      `,
      instancePage: {
        label: 'Letter',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            TODO: description.
          </p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Title',
          description: 'The name or title of the Work.'
        },
        language: {
          label: 'Language',
          description: `
            The language in which a Work is written in the manuscript
            (i.e., an “Expression” of a Work). One manuscript may contain multiple languages.
          `
        },
        subject: {
          label: 'Subject',
          description: `
            The subject of the letter.
          `
        },
        datasource: {
          label: 'Data source',
          description: `
            The data source of the letter.
          `
        },
        excipit: {
          label: 'Excipit',
          description: `
          An excipit of the letter.
          `
        },
        description: {
          label: 'Description',
          description: `
            The description of the letter content.
          `
        },
        manuscript: {
          label: 'Manuscript',
          description: `
            The specific manuscript(s) in which the Work can be found.
          `
        },
        productionTimespan: {
          label: 'Date',
          description: `
            The date(s) when the manuscript(s) in which the Work can be found were written.
            Multiple production dates may appear for a single manuscript,
            when there are discrepancies between the contributing data source
            or when the precise date is uncertain.
          `
        },
        collection: {
          label: 'Collection',
          description: `
            The specific collection(s) of manuscripts in which a Work can be found.
          `
        },
        source: {
          label: 'Sender',
          description: `
            Sender of the letter.
          `
        },
        target: {
          label: 'Receiver',
          description: `
          Receiver of the letter.
          `
        },
        from: {
          label: 'Place of sending',
          description: `
          Place from where the letter was sent.
          `
        },
        to: {
          label: 'Place of receiving',
          description: `
          The receiving place of the letter.
          `
        }

      }
    },
    emloPlaces: {
      label: 'Places',
      facetResultsType: 'Places',
      shortDescription: 'Description',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to events associated with the
          histories of manuscripts and manuscript collections over the centuries.
          See <a href="/instructions">instructions</a> for using the filters.
          The result view can be selected using the tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes all events in the MMM data.
          </li>
          <li>
            <strong>MAP</STRONG> view visualizes the events that have location information on a map.
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Place',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Events refer to various activities related to Manuscripts and Actors. Event
            types include Production, Transfer of Custody, and Activity events.
            Production events refer to the production of the physical manuscript.
            Transfer of Custody events indicate a change of ownership that involved
            a transaction of some kind, usually through an auction house or bookseller.
            The generic Activity event type covers all other types of events.
          </p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        type: {
          label: 'Type',
          description: `
            Distinguish between “Transfer of Custody”, “Production”, and other
            types of “Activity” events.
          `
        },
        prefLabel: {
          label: 'Label',
          description: `
            Preferable place label.
          `
        },
        country: {
          label: 'Country',
          description: `
            Related country.
          `
        },
        broader: {
          label: 'Parent place',
          description: `
          Parent place, e.g. a municipality, county or country.
          `
        },
        narrower: {
          label: 'Places within',
          description: `
            Smaller places, e.g. towns and villages contained within the place.
          `
        },
        place: {
          label: 'Place',
          description: `
            The specific place(s) associated with the event.
          `
        },
        placeType: {
          label: 'Place type',
          description: `
            The type of the specific place(s) associated with the event.
          `
        },
        note: {
          label: 'Note',
          description: `
            Note
          `
        },
        surrender: {
          label: 'Custody surrendered by',
          description: `
            Custody surrendered by
          `
        },
        receiver: {
          label: 'Custody received by',
          description: `
            Custody received by
          `
        },
        observedOwner: {
          label: 'Observed owner',
          description: `
            Observed owner
          `
        },
        source: {
          label: 'Source',
          description: `
            The source database (Schoenberg, Bibale, and Bodleian) that provided
            the information about the event.
          `
        }
      }
    },
    hellerau: {
      label: 'Hellerau',
      facetResultsType: 'people',
      shortDescription: 'Description',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to events associated with the
          histories of manuscripts and manuscript collections over the centuries.
          See <a href="/instructions">instructions</a> for using the filters.
          The result view can be selected using the tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes all events in the MMM data.
          </li>
          <li>
            <strong>MAP</STRONG> view visualizes the events that have location information on a map.
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      // instancePage: {
      //   label: 'Place',
      //   description: `
      //     <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      //       Events refer to various activities related to Manuscripts and Actors. Event
      //       types include Production, Transfer of Custody, and Activity events.
      //       Production events refer to the production of the physical manuscript.
      //       Transfer of Custody events indicate a change of ownership that involved
      //       a transaction of some kind, usually through an auction house or bookseller.
      //       The generic Activity event type covers all other types of events.
      //     </p>
      //   `
      // },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Name',
          description: `
            Preferable place label.
          `
        },
        home1930: {
          label: 'Hometown 1930',
          description: `
            Hometown 1930 description.
          `
        },
        home1937: {
          label: 'Hometown 1937',
          description: `
            Hometown 1937 description.
          `
        }
      }
    },
    clientFSPlaces: {
      label: 'ClientFS',
      shortDescription: 'Client-side faceted search',
      datasets: {
        kotus: {
          label: 'Names Archive of the Institute for the Languages of Finland (NA)',
          aboutLink: 'https://nimiarkisto.fi/wiki/Nimiarkisto:Tietoja'
        },
        pnr: {
          label: 'Finnish Geographic Names Registry (PNR)',
          aboutLink: 'https://www.maanmittauslaitos.fi/kartat-ja-paikkatieto/asiantuntevalle-kayttajalle/tuotekuvaukset/nimisto'
        },
        warsa_karelian_places: {
          label: 'Karelian map names (KK)',
          aboutLink: 'https://www.suomi.fi/palvelut/verkkoasiointi/vanhat-karjalan-kartat-maanmittauslaitos/f51d72a2-510c-4c34-bb3e-b752f5d38250'
        },
        tgn: {
          label: 'The Getty Thesaurus of Geographic Names (TGN)',
          aboutLink: 'http://www.getty.edu/research/tools/vocabularies/tgn/about.html'
        }
      },
      facetResultsType: '',
      inputPlaceHolder: 'Search place names',
      searchByArea: 'Search by area',
      searchByAreaTitle: `
        Siirrä karttanäkymä tutkittavalle alueelle, aseta zoomaustasoksi 
        vähintään 11 ja käytä alareunan hakupainiketta.
      `,
      searchByAreaCancel: 'Cancel',
      searchByAreaSearch: 'Search',
      properties: {
        datasetSelector: {
          label: 'Choose dataset(s)',
          description: 'Description'
        },
        prefLabel: {
          label: 'Name',
          description: 'Description'
        },
        broaderTypeLabel: {
          label: 'Type',
          description: 'Description'
        },
        broaderAreaLabel: {
          label: 'Area',
          description: 'Description'
        },
        modifier: {
          label: 'Modifier',
          description: 'Description'
        },
        basicElement: {
          label: 'Base',
          description: 'Description'
        },
        collectionYear: {
          label: 'Year',
          description: 'Description'
        },
        source: {
          label: 'Source',
          description: 'Description'
        }
      }
    }
  },
  aboutThePortalPartOne: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      About the Portal
    </h1>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Morbi nunc ex, ultrices vitae molestie eu, fringilla quis dolor. Vivamus in enim nibh. 
      Nunc rutrum molestie ex eget dictum. Mauris lectus leo, ultrices in sodales ac, fermentum 
      ut massa. In porta, mauris sed facilisis lacinia, eros magna sollicitudin tortor, quis venenatis 
      nisl ipsum lacinia justo. Duis pretium bibendum consequat. 
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In 
      hac habitasse platea dictumst. Curabitur consectetur aliquet est, ac dapibus ante semper vitae. 
      Sed consequat at est ac lobortis. In vitae metus in ligula pretium vehicula. Aliquam maximus 
      ac massa euismod eleifend. Vestibulum vehicula mattis libero at tempus.
    </p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Data
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Nullam eu blandit ex, quis consectetur enim. Nulla aliquam, enim non euismod tincidunt, 
      neque eros tincidunt urna, eget elementum diam metus vel elit. Donec dui augue, vehicula a cursus ut, 
      efficitur eget velit. Aliquam pellentesque odio vel metus sodales tempor. Donec in lectus magna. 
      Cras at odio a libero laoreet viverra nec sed lorem. In malesuada tempus dolor. 
      Suspendisse et ligula quis nisi facilisis maximus. Sed dictum justo eu condimentum efficitur. 
      Mauris porttitor ante nec auctor vulputate. Phasellus varius, odio sed egestas bibendum, 
      dolor lacus consequat turpis, ac pulvinar libero lorem maximus nunc. Praesent egestas volutpat 
      leo, vel faucibus dui convallis sed. Ut sed libero eu nisi accumsan mollis. Pellentesque 
      ultricies est non porta luctus. Maecenas eget viverra mauris.
    </p>
    `,
  aboutThePortalPartTwo: `
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Mauris porttitor ante nec auctor vulputate. Phasellus varius, odio sed egestas bibendum, 
      dolor lacus consequat turpis, ac pulvinar libero lorem maximus nunc. Praesent egestas volutpat 
      leo, vel faucibus dui convallis sed. Ut sed libero eu nisi accumsan mollis. Pellentesque 
      ultricies est non porta luctus. Maecenas eget viverra mauris.
      </p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Data Reuse
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Nullam eu blandit ex, quis consectetur enim. Nulla aliquam, enim non euismod tincidunt, 
      neque eros tincidunt urna, eget elementum diam metus vel elit. Donec dui augue, vehicula a cursus ut, 
      efficitur eget velit. Aliquam pellentesque odio vel metus sodales tempor. Donec in lectus magna. 
      Cras at odio a libero laoreet viverra nec sed lorem. In malesuada tempus dolor. 
      Suspendisse et ligula quis nisi facilisis maximus. Sed dictum justo eu condimentum efficitur. 
      Mauris porttitor ante nec auctor vulputate. Phasellus varius, odio sed egestas bibendum, 
      dolor lacus consequat turpis, ac pulvinar libero lorem maximus nunc. Praesent egestas volutpat 
      leo, vel faucibus dui convallis sed. Ut sed libero eu nisi accumsan mollis. Pellentesque 
      ultricies est non porta luctus. Maecenas eget viverra mauris.
    </p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      More Information
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Nullam eu blandit ex, quis consectetur enim. Nulla aliquam, enim non euismod tincidunt, 
      neque eros tincidunt urna, eget elementum diam metus vel elit. Donec dui augue, vehicula a cursus ut, 
      efficitur eget velit. Aliquam pellentesque odio vel metus sodales tempor. Donec in lectus magna. 
      Cras at odio a libero laoreet viverra nec sed lorem. In malesuada tempus dolor. 
      Suspendisse et ligula quis nisi facilisis maximus. Sed dictum justo eu condimentum efficitur. 
      Mauris porttitor ante nec auctor vulputate. Phasellus varius, odio sed egestas bibendum, 
      dolor lacus consequat turpis, ac pulvinar libero lorem maximus nunc. Praesent egestas volutpat 
      leo, vel faucibus dui convallis sed. Ut sed libero eu nisi accumsan mollis. Pellentesque 
      ultricies est non porta luctus. Maecenas eget viverra mauris.
    </p>
  `,
  instructions: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      Instructions
    </h1>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The search functionality of this semantic portal is based on the
      <a href="https://doi.org/10.2200/S00190ED1V01Y200904ICR005" target='_blank' rel='noopener noreferrer'>
      faceted search</a> paradigm. By default each perspective displays
      all results from the corresponding class.
      This default result set can be narrowed down by using the filters on the left.
    </p>

    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Using a single filter
    </h2>

    <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      Selecting values within a filter
    </h3>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      All possible values for a filter are displayed either as a list or as a hierarchical
      tree structure (if available). The number of results is shown in brackets for each value.
      Once a value is selected, the results are automatically updated. To prevent further
      selections that do not return any results, also the possible values for all
      other filters are updated at the same time.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Multiple values can be selected within a single filter. Selecting multiple values
      generates results that contain any of the selected values. For example, selecting
      both <i>Saint Augustine</i> and <i>Saint Jerome</i> as an Author returns results that
      include either <i>Saint Augustine</i> <strong>OR</strong> <i>Saint Jerome</i> as an Author.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Selected values of a filter appear in the Active filters section at the top of the list
      of filters. To deselect a filter, click the X mark next to it within the Active filters
      section. You can also deselect a filter value by unchecking the checkmark in the
      filter’s value list. The Active filters section only appears if there are filter
      values currently selected.
    </p>

    <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      Searching within a filter
    </h3>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Search within a filter by using the search field at the top of each filter.
      All possible values of a filter remain visible at all times. The values of
      the filter that match the search term are indicated by a purple underline.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Steps for searching within filters:
    </p>
    <ol class="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom">
      <li>
        Type search term into search field. If there are matches, a number
        will appear to the right of the search field, indicating the number
        of filter values that match the search term.
      </li>
      <li>
        Click the arrows to the right of the search field to cycle
        through the results. As you click the arrow, a different filter value
        will appear at the top of the list. Matched filters are underlined in
        purple.
      </li>
      <li>
        Click the checkmark next to a filter value to activate it. The results
        (and also other filters) are automatically updated.
      </li>
    </ol>

    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Using multiple filters simultaneously
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The effectiveness of faceted search is realized when multiple filters are
      applied at the same time. As in many e-commerce sites, a logical AND is
      always used between the filters. For example selecting <i>Saint Augustine </i>
      and <i>Saint Jerome</i> as an Author and <i>Sir Thomas Phillipps</i> and
      <i> Thomas Thorpe</i> as an Owner, the results are narrowed down as follows:
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
      (Author: <i>Saint Augustine</i> <strong>OR</strong> Author: <i>Saint Jerome</i>)
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
        <strong>AND</strong>
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
      (Owner: <i>Sir Thomas Phillipps</i> <strong>OR</strong> Owner: <i>Thomas Thorpe</i>)
    </p>
  `,
  feedback: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      Feedback
    </h1>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      This semantic portal has been developed by ...
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      We are interested in your feedback on the functionality, coverage, and usefulness of the portal and its data.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Please complete our
      <a href="" target='_blank' rel='noopener noreferrer'>Feedback Survey Form (add link).</a>
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      You can also contact us via email: ... or DM us on Twitter: ...
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Please be aware that this portal’s response times may be affected by the size and complexity
      of the underlying knowledge graph.
    </p>
    `
}