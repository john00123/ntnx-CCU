const cardData ={
  cardInfo : ['CCUs Available','CCUs Consumed','Enviroment information'],
  cardBody :[13000,50000 ,50 + ' Clusters Licensed', ],
  cardSecondary : ['Consumed CCUs','Available CCUs','Last updated Oct 2016'],
}

const usageData ={

  Type :['Acropolis Pro','Acropolis Pro','Acropolis Pro','Acropolis Pro','Acropolis Pro','Acropollis Ultimate','Acropollis Ultimate','Acropollis Ultimate','Calm','File Server','File Server', 'Software Encryption','Software Encryption','Prism Pro'],

  Purchased :['750','600','135','750','600','135','750','600','135','750','600','135','750','600','135'],

  Ammounts :['750','600','135','750','600','135','750','0','135','750','0','135','750','600','135'],

  Expiration :['12/12/2020','12/12/2020','12/12/2020','12/12/2020','12/12/2020','12/12/2020','12/12/2020','12/12/2022','12/12/2022','12/12/2022','12/12/2022','12/12/2022','12/12/2022','12/12/2022','12/12/2022','12/12/2022'],
}

const licensePrices=[
  {key: 'Starter', price:9000},
  {key: 'Pro', price:12000},
  {key: 'Ultimate', price:16000},
]

let Popurri = {
  option : 9000,
  sw: null,
  fs: null
}

let sum = Popurri.option + Popurri.sw + Popurri.fs;
