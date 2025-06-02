const params = {
    appId: 'app',
<<<<<<< HEAD
    agencyId: 'dp-57', // find in the data page of your cloudtables dataset
    clientId: 'pssdb-v12', // unique for each dataset
    cloudTableId: '2e623496-3cb7-11f0-a98a-738f477aee66', // find in embed tab
=======
    agencyId: 'dp-9', // find in the data page of your cloudtables dataset
    clientId: 'pssdb-v11', // unique for each dataset
    cloudTableId: 'fd3ab5e8-3064-11ed-a814-6bfc76c2745a', // find in embed tab
>>>>>>> ce2ce8b4996fb42dade3946692e66873ee9379a3
    // below here probably won’t change 
    tableId: 'cloudtable', // DOM element for the table
    cloudTableDomain: 'vs-postmedia-a.cloudtables.me',
    // should probably have 3-4 servers in the pool...
    serverPool: [
        'vs-postmedia-a.cloudtables.me'
        // 'vs-postmedia-b.cloudtables.me'
    ],
    apiKey: 'kcZqiHL7MiUCi1waLZYN1vkz' // read-only    
};

export default params;