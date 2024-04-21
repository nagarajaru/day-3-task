function reqlistener(){
    const CountriesData=JSON.parse(this.responsetext);
    // this.responsetext;
    console.log(CountriesData);
    for(let ind=0; ind< CountriesData.length; ind++){
        console.log(CountriesData[ind].flgs.png);
    }
}