{
    "manifest_version": 2,
    "name": "Laws Automatic Reference",
    "version": "0.2.2.2",
    "author": [ {
        "name": "Talia Katz"
       } ],
    "content_scripts": [
        {
            "matches": ["http://*/*", "https://*/*"],
            "js": ["jquery.js", "myscript.js"]
        }
    ]
} 

