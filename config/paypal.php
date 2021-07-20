<?php 
return [ 
    'client_id' => 'AdIxZ2sg7ZY6NGocvpCXHCAQVSYbkd_BtFumgCM67YQWdmaGTg60toPl63Pxt4bwgS9LNIB6elw6ssyj',
	'secret' => 'ECMzGgCxF0qRHXmDrLqubrf_r2xKBqSMAf9Ckxz6SeNodNOYuvi03vBB6gQnMBzuWEStmIS80ZcAkCMo',
    'settings' => array(
        'mode' => 'sandbox',
        'http.ConnectionTimeOut' => 1000,
        'log.LogEnabled' => true,
        'log.FileName' => storage_path() . '/logs/paypal.log',
        'log.LogLevel' => 'FINE'
    ),
];