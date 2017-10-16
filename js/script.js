//licensing options

const license = {
  aos:{
    name: 'Acropolis License',
    type:['No license','Starter','Pro','Ultimate'],
    cost:['Select a license','12000 CCU','14000CCU','16000CCU'],
    expiration:['','Expires 12/12/2020','Expires 12/12/2020','Expires 12/12/2020']
  },

  calm:{
    name: 'Calm License',
    cost: '200VM License',
    expiration: 'Expires 10/10/2022'
  },

  encryption:{
    name: 'Software Encrypt',
    cost: '4 Licenses',
    expiration: 'Expires 20/02/2023'
  },

  fileServer:{
    name: 'File Server',
    cost: '10 Licenses',
    expiration: 'Expires 23/03/2022'
  },

  noAddon:{
    name: 'No Addon',
    cost: 'Select Add-ons',
    expiration: '',
  },

  spacer: '<option hidden disabled></option>'

};


//basic block creation

function blockCreate(i,j,k,l,m,n){
  $('.data-main-content').append(
    `<div class='data-block'>
      <h1>${i}</h1>

      <div class='icon-group'>
        <div class='img-license ${m}'>
        <code>${j}</code>
        </div>
      </div>

      <h5>${k} ${l}</h5>
      <div class='separator'></div>

      <div class='multi-button'>
        <div class='data-button-grouping'>
          <kbd>${n}</kbd>
          <select class='primary ${i}'>
          <option disabled>Choose your license</option>
          <optgroup label=""></optgroup>
          </select>
        </div>
      </div>
    </div>`
  );
}


//block replacement

function blockReplace(i,j,k,l,m,n,x){
  $(`.data-block:eq(${x})`).html(
    `<h1>${i}</h1>

      <div class='icon-group'>
        <div class='img-license ${m}'>
        <code>${j}</code>
        </div>
      </div>

      <h5>${k} ${l}</h5>
      <div class='separator'></div>

      <div class='multi-button'>
        <div class='data-button-grouping'>
          <kbd>${n}</kbd>
          <select class='primary ${i}'>
          <option disabled>Choose your license</option>
          <optgroup label=""></optgroup>
          </select>
        </div>
      </div>
    </div>`
  );
}

//dropdown data

function aosDropdownData(i){
  for (x=i; x<3; x++){
    $('.Acropolis').append(
      `<option class='added' value='${license.aos.type[x+1]}'>
        ${license.aos.type[x+1]}
      </option>
      <optgroup class='added' label='${license.aos.expiration[x+1]}'>
      </optgroup>
    `);
  }
}

function addonDropdownData(){
  $('.Add-On').append(
    `<option class='other' value='${license.encryption.name}'>
      ${license.encryption.name}
    </option>
    <optgroup class='other' label='${license.encryption.expiration}'>
    </optgroup>

  <option class='other' value='${license.fileServer.name}'>
    ${license.fileServer.name}
  </option>
  <optgroup class='other' label='${license.fileServer.expiration}'>
  </optgroup>
  `);

}

//acropolis block

function Acropolis(i,j){
  blockCreate(
    license.aos.name,
    license.aos.type[i],
    license.aos.cost[i],
    license.aos.expiration[i],
    '',
    j,
  );
}

//replace content

function replaceAcropolis(i,j){
  blockReplace(
    license.aos.name,
    license.aos.type[i],
    license.aos.cost[i],
    license.aos.expiration[i],
    '',
    j,
    0
  );
}


//no addon

function noaddonBlock(){
  blockCreate(
    'Add-On',
    license.noAddon.name,
    license.noAddon.cost,
    license.noAddon.expiration,
    'addon',
    'Select &nbsp; &nbsp;',
  );
}


//addon create block

function addonsBlock(){
  blockCreate(
    'Add-On',
    license.fileServer.name,
    license.fileServer.cost,
    license.fileServer.expiration,
    'addon',
    'Manage',
  );
}


//addon replace block

function replaceAddon(){
  blockReplace(
    'Add-On',
    license.fileServer.name,
    license.fileServer.cost,
    license.fileServer.expiration,
    'addon',
    'Manage',
    1,
  );
}

function replaceAddon2(){
  blockReplace(
    'Add-On',
    license.encryption.name,
    license.encryption.cost,
    license.encryption.expiration,
    'addon',
    'Manage',
    1,
  );
}

//format for multiple addons

function addAddon(i){
  $('.addon').after(
    `<div class='img-license addon'>
      <code>${i}</code>
    </div>`);

  if($('.addon').length > 1){
    $('.addon').css('width','130px');
  }
}


//calm

function calmBlock(){
  blockCreate(
    'Calm',
    license.calm.name,
    license.calm.cost,
    license.calm.expiration,
    'addon',
    'Options',
  );
}


//Conditial addon Formating

function textSize(){
  for (i=0; i<=$('.addon').length; i++){

    let cubename=$(`.addon:eq(${i})`).find('code');

    if (cubename.text().length > 12){
      cubename.css('font-size','12px');
      cubename.css('font-weight','500');
    }
  }
}
