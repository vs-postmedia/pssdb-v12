const params = {
    appId: 'app',
    agencyId: 'dp-63', // find in the data page of your cloudtables dataset
    clientId: 'pssdb-v12', // unique for each dataset
    cloudTableId: 'a928b8fa-3ffd-11f0-a19b-cb99422b5336', // find in embed tab

    // below here probably won’t change 
    tableId: 'cloudtable', // DOM element for the table
    // cloudTableDomain: 'vs-postmedia-a.cloudtables.me',
    // should probably have 3-4 servers in the pool...
    serverPool: [
        'vs-postmedia-a.cloudtables.me',
        // 'pssdb-postmedia.org'
    ] 
};

export default params;


