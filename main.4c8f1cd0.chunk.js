(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 108:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/cloudtables-api/dist/CloudTablesApi.js
var CloudTablesApi = __webpack_require__(77);
var CloudTablesApi_default = /*#__PURE__*/__webpack_require__.n(CloudTablesApi);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(137);

// EXTERNAL MODULE: ./src/Components/Combobox/jquery-ui-autocomplete.css
var jquery_ui_autocomplete = __webpack_require__(143);

// CONCATENATED MODULE: ./src/Components/Combobox/Combobox.js



function setupAgencyCombobox(combobox) {
  // combobox setup
  $(function () {
    $.widget('custom.combobox', {
      _create: function () {
        this.wrapper = $('<span>').addClass('custom-combobox').insertAfter(this.element);
        this.element.hide();
        this._createAutocomplete();
        this._createShowAllButton();
        this.stored_input;
      },
      _createAutocomplete: function () {
        var selected = this.element.children(':selected'),
          value = selected.val() ? selected.text() : '';
        this.input = $('<input>').appendTo(this.wrapper).val(value).attr('title', '').addClass('custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left').autocomplete({
          delay: 0,
          minLength: 0,
          source: this._source.bind(this)
        }).tooltip({
          classes: {
            'ui-tooltip': 'ui-state-highlight'
          }
        });

        // clear the input on focus
        this._on(this.input, {
          focus: function (event, ui) {
            // store current value
            this.stored_input = this.input[0].value;
            // clear input text
            this.input[0].value = '';
          }
        });
        this._on(this.input, {
          focusout: function (event, ui) {
            ;
            // reset stored value if blank
            if (this.input[0].value == '') {
              this.input[0].value = this.stored_input;
            }
          }
        });
        this._on(this.input, {
          autocompleteselect: function (event, ui) {
            ui.item.option.selected = true;
            this._trigger('select', event, {
              item: ui.item.option
            });
            // trigger change event
            $('#combobox').trigger('change');

            // clear input focus
            this.stored_input = null;
            this.input[0].blur();
          },
          autocompletechange: '_removeIfInvalid'
        });
      },
      _createShowAllButton: function () {
        var input = this.input,
          wasOpen = false;
        $('<a>').attr('tabIndex', -1)
        // .attr('title','Show All Items')
        .tooltip().appendTo(this.wrapper).button({
          icons: {
            primary: 'ui-icon-triangle-1-s'
          },
          text: false
        }).removeClass('ui-corner-all').addClass('custom-combobox-toggle ui-corner-right').on('mousedown', function () {
          wasOpen = input.autocomplete('widget').is(':visible');
        }).on('click', function () {
          input.trigger('focus');

          // Close if already visible
          if (wasOpen) {
            return;
          }

          // Pass empty string as value to search for, displaying all results
          input.autocomplete('search', '');
        });
      },
      _source: function (request, response) {
        var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), 'i');
        response(this.element.children('option').map(function () {
          var text = $(this).text();
          if (this.value && (!request.term || matcher.test(text))) return {
            label: text,
            value: text,
            option: this
          };
        }));
      },
      _removeIfInvalid: function (event, ui) {
        // Selected an item, nothing to do
        if (ui.item) {
          return;
        }

        // Search for a match (case-insensitive)
        var value = this.input.val(),
          valueLowerCase = value.toLowerCase(),
          valid = false;
        this.element.children('option').each(function () {
          if ($(this).text().toLowerCase() === valueLowerCase) {
            this.selected = valid = true;
            return false;
          }
        });

        // Found a match, nothing to do
        if (valid) {
          return;
        }

        // Remove invalid value
        this.input.val('')
        // .attr('title','No matches')
        .tooltip('open');
        this.element.val('');
        this._delay(function () {
          this.input.tooltip('close').attr('title', '');
        }, 2500);
        this.input.autocomplete('instance').term = '';
      },
      _destroy: function () {
        this.wrapper.remove();
        this.element.show();
      }
    });

    // execute function
    $(combobox).combobox();
  });
}
/* harmony default export */ var Combobox = (setupAgencyCombobox);
// CONCATENATED MODULE: ./src/data/agencies.js
const agenciesList = ["BCIT", "Camosun College", "Capilano University", "Coast Mountain College", "College of the Rockies", "College of New Caledonia", "Douglas College", "Emily Carr University", "Justice Institute of B.C.", "Kwantlen Polytechnic University", "Langara College", "North Island College", "Northern Lights College", "Okanagan College", "Selkirk College", "Simon Fraser University (SFU)", "Thompson Rivers University", "University of B.C. (UBC)", "University of the Fraser Valley", "University of Northern B.C.", "University of Victoria", "Vancouver Community College (VCC)", "Vancouver Island University", "B.C. Assessment", "B.C. Council for International Education", "B.C. Energy Regulator", "B.C. Ferries", "B.C. Financial Services Authority", "B.C. Housing", "B.C. Hydro", "B.C. Infrastructure Benefits", "B.C. Liquor Distribution Branch", "B.C. Lottery Corporation", "B.C. Securities Commission", "B.C. Transit", "B.C. Utilities Commission", "Columbia Basin Trust", "Community Living B.C.", "Destination B.C.", "First Peoples' Cultural Council", "Forest Enhancement Society of B.C.", "Forestry Innovation Investment", "ICBC", "InBC Investment Corp.", "Infrastructure B.C.", "Insurance Council of B.C.", "Innovate B.C.", "Knowledge Network", "Legal Aid B.C.", "B.C. Pavilion Corporation", "Powerex", "PowerTech", "Royal B.C. Museum", "Skilled Trades B.C.", "Technical Safety B.C.", "Transportation Investment Corporation", "TransLink", "Worksafe B.C.", "Vancouver Coastal Health", "Fraser Health", "Interior Health", "Provincial Health Services Authority (PHSA)", "Northern Health", "Island Health", "City of Pitt Meadows", "District of West Vancouver", "District of North Vancouver", "District of Oak Bay", "City of Port Moody", "District of Saanich", "City of Surrey", "City of Delta", "Langley City", "Langley Township", "City of Maple Ridge", "City of New Westminster", "City of White Rock", "Village of Anmore", "Bowen Island", "Village of Belcarra", "City of Burnaby", "City of Richmond", "City of Victoria", "Provincial government", "City of Coquitlam", "Metro Vancouver", "City of Vancouver", "Abbotsford Police", "Central Saanich Police", "Delta Police", "Oak Bay Police", "Port Moody Police", "Saanich Police", "Surrey Police (SPS)", "Transit Police", "Vancouver Police", "Victoria Police", "Abbotsford school district", "Burnaby school district", "Chilliwack school district", "Coquitlam school district", "Delta school district", "Langley school district", "Mission school district", "New Westminster school district", "North Vancouver school district", "Richmond school district", "Ridge-Meadows school district", "Surrey school district", "Vancouver school district", "West Vancouver school district"];
/* harmony default export */ var agencies = (agenciesList);
// CONCATENATED MODULE: ./src/data/params.js
const params = {
  appId: 'app',
  agencyId: 'dp-63',
  // find in the data page of your cloudtables dataset
  clientId: 'pssdb-v12',
  // unique for each dataset
  cloudTableId: 'a928b8fa-3ffd-11f0-a19b-cb99422b5336',
  // find in embed tab

  // below here probably won’t change 
  tableId: 'cloudtable',
  // DOM element for the table
  cloudTableDomain: 'vs-postmedia-a.cloudtables.me',
  // should probably have 3-4 servers in the pool...
  serverPool: ['vs-postmedia-a.cloudtables.me'
  // 'vs-postmedia-b.cloudtables.me'
  ]
};
/* harmony default export */ var data_params = (params);
// EXTERNAL MODULE: ./src/css/normalize.css
var normalize = __webpack_require__(144);

// EXTERNAL MODULE: ./src/css/postmedia.css
var postmedia = __webpack_require__(145);

// EXTERNAL MODULE: ./src/css/colors.css
var colors = __webpack_require__(146);

// EXTERNAL MODULE: ./src/css/fonts.css
var fonts = __webpack_require__(147);

// EXTERNAL MODULE: ./src/css/main.css
var main = __webpack_require__(148);

// EXTERNAL MODULE: ./src/css/cloudtable.css
var cloudtable = __webpack_require__(149);

// CONCATENATED MODULE: ./src/fonts/Shift-Bold.otf
/* harmony default export */ var Shift_Bold = (__webpack_require__.p + "assets/Shift-Bold.8c454d7e.otf");
// CONCATENATED MODULE: ./src/fonts/Shift-BoldItalic.otf
/* harmony default export */ var Shift_BoldItalic = (__webpack_require__.p + "assets/Shift-BoldItalic.144e2c1f.otf");
// CONCATENATED MODULE: ./src/fonts/BentonSansCond-Regular.otf
/* harmony default export */ var BentonSansCond_Regular = (__webpack_require__.p + "assets/BentonSansCond-Regular.4421f875.otf");
// CONCATENATED MODULE: ./src/fonts/BentonSansCond-RegItalic.otf
/* harmony default export */ var BentonSansCond_RegItalic = (__webpack_require__.p + "assets/BentonSansCond-RegItalic.06edc58b.otf");
// CONCATENATED MODULE: ./src/fonts/BentonSansCond-Bold.otf
/* harmony default export */ var BentonSansCond_Bold = (__webpack_require__.p + "assets/BentonSansCond-Bold.87a66dcd.otf");
// CONCATENATED MODULE: ./src/index.js






// CSS







// FONTS






// VARS
let server;
let serverPool;

// JS FUNCTIONS
const init = async () => {
  // add api key to params
  data_params.apiKey = "kcZqiHL7MiUCi1waLZYN1vkz";

  // assign server - HACK!!! DISABLE WHEN TRAFFIC DROPS
  // serverPool = params.serverPool;
  // server = await assignServer(serverPool);

  server = data_params.cloudTableDomain;

  // create dynamic list of options for agency select tag
  createAgencyComboBox(agencies);

  // create combobox filter for agencies
  Combobox('#combobox');
  $('#combobox').change(comboboxChangeHandler);

  // load the unfiltered cloudtable
  loadCloudTable('');
};

// super-hack "load balancer"
function assignServer(serverPool) {
  let server;
  // const date = new Date();
  // const current_min = date.getMinutes();

  // if (current_min % 2 == 0) {
  //     server = params.cloudTableDomain;
  // } else {
  //     server = params.cloudTableDomain_v2;
  // }
  if (serverPool.length == 0) {
    // re-assign server pool & pull sever from pool
  } else {
    // pull server from pool
    server = serverPool.pop();
  }

  // return server
  return server;
}
function comboboxChangeHandler(e) {
  // reset container dom element
  $('.cloudtables')[0].textContent = '';

  // reload the table with selected agency filtered
  const filterValue = e.target.value === 'All agencies' ? null : e.target.value;

  // reload table
  loadCloudTable(filterValue);
}
function createAgencyComboBox(agenciesList) {
  let agenciesString = '';

  // sort our list
  const list = agenciesList.sort();
  list.unshift('All agencies');
  list.forEach(d => {
    agenciesString += "<option value='".concat(d, "'>").concat(d, "</option>");
  });
  $('#combobox').append(agenciesString);
}
async function loadCloudTable(agency) {
  let conditionsArray = [{
    id: data_params.agencyId,
    value: agency
  }];

  // if the filter has been selected, filter for those options, otherwise show everything (null)
  let conditions = agency ? conditionsArray : null;

  // grab the ct api instance
  let api = new CloudTablesApi_default.a(data_params.apiKey, {
    clientName: data_params.clientId,
    // Client's name - optional
    domain: server,
    // CloudTables host
    // domain: params.cloudTableDomain,       // Your CloudTables host
    // secure: false,              // Disallow (true), or allow (false) self-signed certificates   
    // ssl: false,               // Disable https
    conditions: conditions // Use this to filter table
  });
  console.log("https://".concat(server, "/io/loader/").concat(data_params.cloudTableId, "/table/d"));
  // get a cloudtables api token
  let token = await api.token();
  // build the script tag for the table
  let script = document.createElement('script');
  script.src = "https://".concat(server, "/io/loader/").concat(data_params.cloudTableId, "/table/d");
  script.setAttribute('data-token', token);
  script.setAttribute('data-insert', data_params.tableId);
  script.setAttribute('data-clientId', data_params.clientId);

  // insert the script tag to load the table
  let app = document.getElementById(data_params.appId).appendChild(script);
}

// KICK *SHT OFF!!!
init();

/***/ })

},[[150,1,2]]]);