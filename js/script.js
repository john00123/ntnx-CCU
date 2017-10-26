const cardData ={
  cardInfo : ['ACU Available','ACU Consumed','Enviroment information'],
  cardBody :['13000','50000 ','50 Clusters Licensed', ],
  cardSecondary : ['Consumed ACUs','Available ACUs','Last updated Oct 2016'],
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



// creates cards
function cardsData() {
  var cards = cardData.cardInfo.length;
  var index = 0;
  // function
  while (cards> 0){
    $('.deck').append(
      `<div class='card'>
        <div class='card-body'>
          <h4>${cardData.cardBody[index]}</h4>
          <p>${cardData.cardSecondary[index]}</p>
        </div>
      </div>`
    );

    cards--;
    index++;
  }
}


// adds data to the table and graphs
function tableData(){
  for(let i=0; i<usageData.Type.length; i++){
    $('.usage').append(
      `<tr>
        <td> ${usageData.Type[i]}</td>
        <td> ${usageData.Purchased[i]}</td>
        <td> ${usageData.Ammounts[i]}</td>
        <td> ${usageData.Expiration[i]}</td>
    </tr>`);
  }
}

// Popup

const popupData ={
  title :[
    'License Cluster',
    'Puppyfood License',
    'Reclaim',
  ],

  body: [

    //credits
    `
    <h3 style='margin-bottom:0px'>Select your cluster summary file</h3>
    <p style='margin-bottom:20px; width:100%'>This helps us find all available licenses for a selected cluster</p>


    <input type="file" id='file' accept=".xml">
    <label for='path2'>Select file</label>
    <div class='upload-file'>
    <input class='path' readonly type='text' id='path2'></input>
    <label class='file-button' for='file'>Select File</label>
    </div>

    `,

    //tax data
    `<h1 class='initial-tax'>
    Nutanix is required to collect sales tax in some US states.</h1>

    <p style='margin-bottom:20px;'> If you're tax exempt in a particular state, please attach an electronic copy of your valid tax exemption certificate authorized by the appropriate taxing authority.</p>

    <label id='tax-label'for="tax">Tax Document number</label>
    <input type="text" id="tax" placeholder='000 000 0000' onkeypress="return event.charCode >= 48 && event.charCode <= 57" style='margin-bottom:20px'/>

    <input type="file" id='file' accept=".xml">
    <label for='path2'>Select file</label>
    <div class='upload-file'>
    <input class='path' readonly type='text' id='path2'></input>
    <label class='file-button' for='file'>Select File</label>
    </div>
    <p style='margin: 22px 0 -8px 0;' class='consult'>To learn if your cloud consumption is subject to sale taxes, consult your tax advisor.</p>
    `,

    // change plan
    `
    <div class="section1">
      <h1>
      <input type='radio' class='radio'checked="checked"> Pay as you go plan. <code style="  margin-left: 10px;">Current Plan</code></h1>
      <p>Pay only for what you use, reducing the risk or overprovisioning or missing capacity.</p>

      <div class='separator'></div>

      <h1>
      <input type='radio'  class='radio' > Minimum Commitment
      </h1>
      <p style="margin-bottom:20px;">Select an ammount for your minimum commitment plan.</p>

      <label>Select Term & ammount per month</label><br>
      <div class='upload-file'>
        <input class='min-commit-val' style="margin:10px 0; border-radius:4px 0 0 4px;" type='number'  placeholder="$2000.00" step="1000.00">
        <select class='term'>
        <option>3 years</option>
        <option>1 year</option>
        </select>
      </div>
    </div>
      `,
  ],

  footer:[
    `<button class="primary redeem">Next</button>`,

    `<button class="primary save">Save</button>`,

    `<button class="primary save">Save</button>`,

    `<button class="secondary save">Cancel</button>
    <button class="primary save">Save Changes</button>`,
  ]
}

//popup animation
function popAnimate(){
  window.scroll(0, 0);
  $('.overlay').css('opacity','1');
  $('html').css('overflow','hidden');
  setTimeout(function(){
    $('.popup').addClass('appear');
  },200);

  $('.popup-header, .save, .secondary').click(function(){
      $('.popup').addClass('disappear');
      $('.overlay').fadeIn();
      $('.overlay').removeClass('show');
      $('html').css('overflow','');
      setTimeout(function(){
        $('.overlay').remove();
      },400);
    }
  );
}


//popup
function popupContent(i){
  $('body').append(
    `<div class="overlay" style='opacity:0'>
      <div class="popup" style='opacity:0'>
        <div class="popup-header">${popupData.title[i]}</div>
        <div class="popup-body">${popupData.body[i]}</div>
        <div class="popup-footer">${popupData.footer[i]}</div>
      </div>
    </div>`
  );

  countNumbers();
  ex();
  popAnimate();
}

$(document).keyup(function(e) {
  if (e.keyCode === 27) $('.popup-header').click();
  if (e.keyCode === 13) $('.primary').click();
});


//counter
function countNumbers(){
  $('.redeem').click(function() {
    $('.popup').addClass('second');
    layer2();
  });
}

function uploadPath(){
  let one = $(this).val().replace("C:\\fakepath\\",'');
  $('.path').val(one);
}

function ex(){
  checkoff();
  $("input[type='file']").change(uploadPath);
  $('input[type="checkbox"]').click(function() {
    if (this.checked) {
      $('.initial-tax').html(`If you're <code>exempt from state tax</code>, attach an electronic copy of a valid tax exemption certificate authorized by the appropriate taxing authority.`);
      $('#tax, #tax-label, .consult').hide();
      $('.save').click(function(){
        $('.card-body:eq(2) h4').text('Tax exemption uploaded');
      })
    }
    else{
      checkoff();
    }
});
}


function checkoff(){
$('.initial-tax').html(`Nutanix is required to collect sales tax documents.`);
$('#tax, #tax-label, .consult').show();
$('.save').click(function(){
  $('.card-body:eq(2) h4').text('221-222-333-44');
});
}


//Layer 2

function layer2(){
  $('body').append(
    `<div class="overlay overlay2" style='background-color:transparent;'>
      <div class="popup layer2" style='opacity:0; width:500px;'>
        <div class="popup-header popup-header2">
          Licenses for Puppyfood
        </div>

        <div class="popup-body panels">

          <div class='panel1'>
          <h4 style='margin-bottom:15px;'>Acropolis License </h4>
            <div class='license-pair'>

              <input
              type='radio'
              checked='checked'
              value='starter'
              style='margin-right: 10px;
              id='acropolis-starter'>

              Starter

            </div>
            <div class='license-pair'>
              <input
              type='radio'
              value='pro'
              style='margin-right: 10px;'
              id='acropolis-pro'>
              Pro
            </div>
            <div class='license-pair' style='margin-bottom:30px;'>
            <input
             type='radio'
             value='ultimate'
             style='margin-right: 10px;'
             id='acropolis-ultimate'>
             Ulitmate
            </div>

          <div class='separator'></div>

          <h4 style='margin-bottom:15px;'>Additional Licenses </h4>
            <div class='license-pair'>

              <input type='checkbox'
              style='margin-right: 10px;
              margin-bottom:10px;'
              id='fs'
              value='fs'>
              File Server <br>

              <input
              type='checkbox'
              style='margin-right: 10px;'
              id='sw'
              value='sw'>
              Software Encryption<br>

            </div>


          </div>

          <div class='panel2'>
            <h3 mar> ACUs required</h3>
            <div class=flexbox-stretch><kbd>${licensePrices[0].key}</kbd> <code class='subt'>${licensePrices[0].price}</code></div>




            <div class='separator prices'></div>

            <div class=flexbox-stretch><kbd>Subtotal</kbd> <code class='subt'>${sum}</code></div>

            <div class=flexbox-stretch><kbd>Available</kbd> <code >${50000} </code></div>

          </div>

        </div>

        <div class="popup-footer">
          <button class="secondary save confirm" style='margin-right:10px;'>
            Cancel
          </button>
          <button class="primary save confirm" style='margin-right:0;'>
            Save
          </button>
        </div>
      </div>
    </div>`
  );

  $('.back, .popup-header2').click(function(){
    $('.layer2').addClass('disappear');
    $('.popup:not(.layer2)').css('animation','reverse-layer 600ms forwards');
    $('.popup:not(.layer2)').removeClass('second');
    $('.layer2, .overlay2').remove();
  });
  popAnimate();
  CheckoutData();
  CheckoutData2();
  CheckoutData3()
}


let Popurri = {
  option : 9000,
  sw: null,
  fs: null
}


let sum = Popurri.option + Popurri.sw + Popurri.fs;

//checkout functions
function CheckoutData(){

  $('input:radio').change(function(){
    $('input:radio:checked').not(this).prop('checked', false);


    //starter price
    if($(this).val()==='starter'){
      $('.flexbox-stretch:eq(0)').html(`${licensePrices[0].key}<code>${licensePrices[0].price}</code>`)
      Popurri.option = licensePrices[0].price;
    }

    if($(this).val()==='pro'){
      $('.flexbox-stretch:eq(0)').html(`${licensePrices[1].key}<code>${licensePrices[1].price}</code>`)
      Popurri.option = licensePrices[1].price;
    }

    if($(this).val()==='ultimate'){
      $('.flexbox-stretch:eq(0)').html(`${licensePrices[2].key}<code>${licensePrices[2].price}</code>`)
      Popurri.option = licensePrices[2].price;
    }
    sum = Popurri.option + Popurri.sw + Popurri.fs;
    $('.subt').text(sum);
  });
}


function CheckoutData3(){
$('#sw').change(function(){
  if($('#sw').is(':checked')){
    $('.prices').before(`
      <div class='flexbox-stretch sw-data'>
        <kbd>SW Encryption</kbd>
        <code>${licensePrices[0].price}</code>
      </div>
    `);
    Popurri.sw = licensePrices[0].price;

  } else{
    $('.sw-data').remove();
    Popurri.sw = null;
  }
  sum = Popurri.option + Popurri.sw + Popurri.fs;
  $('.subt').text(sum);
});
}


function CheckoutData2(){
$('#fs').change(function(){

  if($('#fs').is(':checked')){
    $('.prices').before(`
      <div class='flexbox-stretch fs-data'>
        <kbd>File Server</kbd>
        <code>${licensePrices[0].price}</code>
      </div>
    `);
    Popurri.fs = licensePrices[0].price;
  } else{
    $('.fs-data').remove();
    Popurri.fs = null;
  }
  sum = Popurri.option + Popurri.sw + Popurri.fs;
  $('.subt').text(sum);
});
}


var calmDetails =
`<div class='separator'></div>
<h4 style='margin-bottom:15px;'>Calm License details</h4>
<div class='license-pair'>
  <label for='vmscount' > Number of Virtual Machines </label>
  <input style='margin-top:10px;' type='number' id='vmscount' value='500'>
</div> `


$(document).ready(function() {
  cardsData();
  // popupContent(0);
  // $('.redeem').click();
  tableData();
  $('.cluster-license').click(function(){popupContent(0)});
});
