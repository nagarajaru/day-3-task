function reqlistener(){
    const countriesdata=JSON.parse(this.responsetext)
    //this.responsetext;
    console.log(countriesdata);
    for(let ind=o;ind<countriesdata.length;ind++);
    console.log(countriesdata[ind].name.common,countriesdata[ind].region,countriesdata[ind].subregion);
}