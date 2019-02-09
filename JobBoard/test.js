document.getElementById("test").addEventListener('click', () => {
    console.log("Popup DOM fully loaded and parsed");

    function modifyDOM() {
        //You can play with your DOM here or check URL against your regex
        let dom = document.body.innerHTML;
        console.log("Job Title : ");
        console.log(document.getElementsByClassName("icl-u-xs-mb--xs icl-u-xs-mt--none jobsearch-JobInfoHeader-title")[0].innerHTML);
        console.log("Company Name : ");
        console.log(document.getElementsByClassName("icl-u-lg-mr--sm icl-u-xs-mr--xs")[0].innerHTML);
        console.log("Job Description : ");
        console.log(document.getElementsByClassName("jobsearch-JobComponent-description icl-u-xs-mt--md")[0].innerHTML);
        console.log("Company Location : ");
        //console.log(document.getElementsByClassName("icl-u-lg-mr--sm icl-u-xs-mr--xs").innerHTML);

        console.log(document.getElementsByClassName("indeed-apply-widget indeed-apply-button-container indeed-apply-status-not-applied").innerHTML);
        
        return dom;
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        console.log('Popup script:')
        console.log(results[0]);
    });
});