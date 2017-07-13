(function(){
    var urlRoot = "/contensis/api/delivery/dotnet/v/"
    var cookieName = 'api_docs_version';
    var versions = [];
    var select;
    var config;

    var getConfig = function() {
        return fetch(urlRoot + 'config.json').then(function(response) {
            return response.json();
        });
    };

    var renderOptions = function() {
        var selectedVersion = getCookie(cookieName);

        for(var i = select.options.length - 1 ; i >= 0 ; i--)
        {
            select.remove(i);
        }

        // Add defaults
        addSelectOption('Latest (' + config.version + ')', config.version, selectedVersion === config.version);
        addSelectOption('beta', 'Beta', selectedVersion === 'Beta');
        
        var ordered = versions.sort(function(a, b){return b-a});
        for (var index = 0; index < ordered.length; index++) {
            var element = ordered[index];
            
            addSelectOption(element, element, selectedVersion === element);
        }
    };

    var addSelectOption = function(text, value, selected) {
        var option = document.createElement("option");
        option.setAttribute("value", value);
        option.innerText = text;
        if(selected) {
            option.setAttribute("selected", "selected");
        }
        select.appendChild(option);
    };

    var addVersion = function(version) {
        versions.push(version);
        renderOptions();
    };

    var discoverVersions = function(config) {
        config.previousVersions.forEach(function(version) {
            checkVersionExists(version).then(function(resp) {
                addVersion(version);
            }).catch(function() {
                addVersion(version);
            });
        }, this);
    };

    var checkVersionExists = function(version) {
        var options = {
            method: 'HEAD',
            mode: 'no-cors'
        }
        return fetch(getPageUrl(version), options).then(function(response){
            return response.ok;
        }).catch(function(){
            return false;
        })
    };

    var getPageUrl = function(version) {
        return urlRoot + version + window.location.pathname;
    };

    var navigateToVersion = function(version) {
        if (!config) {
            return;
        }

        setCookie(cookieName, version);
        console.log(urlRoot);
        window.location.href = getPageUrl(version);
    };

    var onSelectChange = function(e) {
        navigateToVersion(e.target.value);
    };

    var createSelect = function() {
        var header = document.getElementsByClassName("book-header")[0];
        header.getElementsByTagName("h1")[0].remove();

        var div = document.createElement("div");
        select = document.createElement("select");
        select.setAttribute("id", "soflow");
        select.addEventListener('change', onSelectChange);

        div.appendChild(select);
        div.setAttribute("class", "version-select pull-right");

        header.appendChild(div);

        renderOptions();
        discoverVersions(config);
    };

    var setCookie = function setCookie(cname, cvalue) {
        document.cookie = cname + "=" + cvalue;
    };

    var getCookie = function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };

    var ensureVersion = function() {
        var storedVersion = getCookie(cookieName);
        if (storedVersion === "") {
            console.log("none");
            return;
        }

        if (window.location.pathname.indexOf(storedVersion) < 0) {
            console.log("navigate");
            navigateToVersion(storedVersion);
        }

        console.log("duh");
    };

    var init = function() {
        select = null;
        versions = [];

        if (config == null) {
            getConfig().then(function(c){
                config = c;
                ensureVersion();
                createSelect();
            });
        } else {
            ensureVersion();
            createSelect();
        }
    };

    gitbook.events.bind("page.change", init);
})();