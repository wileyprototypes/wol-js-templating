let journalMetrics = {
    "10.1111/(ISSN)1365-313X":{
        "citeScore":"8.100",
        "jci":"0.820",
        "if":"5.131",
        "downloads":"1,234",
        "acceptanceRate":"25%"
    },
    "10.1111/(ISSN)1365-2648":{
        "citeScore":"1.5",
        "jci":"0.999",
        "if":"5.909",
        "downloads":"",
        "acceptanceRate":"90%"
    }
}

let metricsData = {
    "journalTitle":digitalData.publication.series.title,
    "journalDoi":digitalData.publication.series.doi,
    "lastUpdated":"November 7, 2022"
};
metricsData.metrics = journalMetrics[metricsData.journalDoi];


let metricsHTML = `
    <div>
        <h3>Journal Metrics: {{journalTitle}} </h3>
        <p>In May 2022 Wiley became a signatory of the Declaration on Research Assessment (DORA), which is a world-wide initiative designed to improve the ways in which the outputs of scholarly research are evaluated</p>
        <p>We're supporting responsible research assessment practices by rolling out a broader range of journal and article metrics publicly available, and helping authors gain deeper insights into the impact of their work. To learn more about these plans, read our press release.</p>
        <p>         
            These metrics were last updated on {{lastUpdated}}
    </div>
    <p><strong>CiteScore (<a href="#">Scopus</a>, 2020)</strong> {{metrics.citeScore}}</p>
    <p><strong>Journal Citation Indicator (<a href="#">Clarivate</a>, 2021)</strong> {{metrics.jci}}</p>
    
        <p><strong>Impact Factor (<a href="#">Clarivate</a>, 2021)</strong> {{metrics.if}}</p>
   
    {{#if metrics.downloads.length}}
    <p><strong>Downloads(2021)</strong> {{metrics.downloads}}</p>
    {{/if}}
`;

template = Handlebars.compile(metricsHTML);
document.getElementById("journal-metrics-page").innerHTML = template(metricsData);
