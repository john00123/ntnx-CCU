const cardData ={
  cardInfo : ['ACU Available','ACU Consumed','Enviroment information'],
  cardBody :['13000 Consumed ACUs','200 available ACUs','50 Clusters Licensed', ],
  cardSecondary : ['Exp. 20/10/2020','Exp. 20/10/2020 ','Last updated Oct 2016'],
}


const usageData ={
  Class:['Software Only','Software Only','Software Only','Software Only','Software Only','Software Only','Appliance','Appliance' ,'Appliance' ,'Appliance','Appliance','Appliance' ,'Appliance' ,'Appliance'],

  Type :['Acropolis Pro','Acropolis Pro','Acropolis Pro','Acropolis Pro','Acropolis Pro','Acropollis Ultimate','Acropollis Ultimate','Acropollis Ultimate','Calm','File Server','File Server', 'Software Encryption','Software Encryption','Prism Pro'],

  Ammounts :['750','600','135','750','600','135','750','600','135','750','600','135','750','600','135'],

  Expiration :['12/12/2020','12/12/2020','12/12/2020','12/12/2020','12/12/2020','12/12/2020','12/12/2020','12/12/2022','12/12/2022','12/12/2022','12/12/2022','12/12/2022','12/12/2022','12/12/2022','12/12/2022','12/12/2022'],
}


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

    if (index == 3){
      $('.card:eq(3)').html(
        `<div class='card-title'>
            <h4>${cardData.cardInfo[index]}</h4><a>Add Funds</a>
          </div>
          <div class='card-body'>
            <h4>${cardData.cardBody[index]}</h4>
            <p>${cardData.cardSecondary[index]}</p>
          </div>`
      );
    }
    cards--;
    index++;
  }
}

// adds points to the chart and hover behavior
function chartData(){
  var july=31;
  for(i = 31; i >= 1; i--){
    if (i <= 9){ i = '0'+ i; }
    $('.x-values').append("<p>"+ i +"</p>");
  }

  $('.x-values p').hover(function(){
    $(this).append(`<kbd class='tooltip-graph'>
    $${billingData.Ammounts[0]}</kbd>`);
    }, function(){
    $(this).find('kbd').remove();}
  );

  $('.x-values p').click(function(){
    $('.click').remove();
    $(this).append("<span class='tooltip-graph click'>$3780.00</span>");
  })

  $('.trend').mouseleave(function(){
    $('.click').remove();
  })
}

// adds data to the table and graphs

function tableData(){
  for(let i=0; i<usageData.Class.length; i++){
    $('.usage').append(
      `<tr>
        <td> ${usageData.Class[i]}</td>
        <td> ${usageData.Type[i]}</td>
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
  $('.overlay').addClass('show');
  $('html').css('overflow','hidden');
  setTimeout(function(){
    $('.popup').addClass('appear');
  },200);

  $('.popup-header, .save, .secondary').click(function(){
      $('.popup').addClass('disappear');
      $('.overlay').addClass('peek');
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
  if(i==2){
    $('body').append(
      `<div class="overlay" style='opacity:0'>
        <div class="popup" style='opacity:0; width:500px'>
          <div class="popup-header">${popupData.title[i]}</div>
          <div class="popup-body">${popupData.body[i]}</div>
          <div class="popup-footer">${popupData.footer[i]}</div>
        </div>
      </div>`
    );
  }else{
  $('body').append(
    `<div class="overlay" style='opacity:0'>
      <div class="popup" style='opacity:0'>
        <div class="popup-header">${popupData.title[i]}</div>
        <div class="popup-body">${popupData.body[i]}</div>
        <div class="popup-footer">${popupData.footer[i]}</div>
      </div>
    </div>`
  );
  }
  popAnimate();
  countNumbers();
  ex();
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
$('#tax, #tax-label, .consult').show()
$('.save').click(function(){
  $('.card-body:eq(2) h4').text('221-222-333-44');
});
}


//Layer 2

function layer2(){
  $('body').append(
    `<div class="overlay overlay2" style='background-color:transparent'>
      <div class="popup layer2" style='opacity:0; width:600px'>
        <div class="popup-header popup-header2">
          Licenses for Puppyfood
        </div>

        <div class="popup-body panels">

          <div class='panel1'>
          <h4 style='margin-bottom:15px;'>Acropolis License </h4>
            <div class='license-pair'>
              <input type='radio' checked='checked' style='margin-right: 10px;'> Starter
            </div>
            <div class='license-pair'>
              <input type='radio'  style='margin-right: 10px;'> Pro
            </div>
            <div class='license-pair' style='margin-bottom:30px;'>
              <input type='radio' ' style='margin-right: 10px;'> Ulitmate
            </div>

            <h4 style='margin-bottom:15px;'>Additional Licenses </h4>
            <p style='color: #22272E'>We have sent a request for you payment method change, your old payment method will remain active until the change has been processed.</p>
          </div>

          <div class='panel2'>
            <h4 style='margin-bottom:15px;''> Checkout</h4>
            <p> Starter License <code>300 CCU</code></p>
            <p> Starter License <code>300 CCU</code></p>
            <p> Starter License <code>300 CCU</code></p>
          </div>

        </div>

        <div class="popup-footer">
          <button class="secondary save confirm" style='margin-right:0;'>
            Close
          </button>
        </div>
      </div>
    </div>`
  );
  popAnimate();
  $('.back, .popup-header2').click(function(){
    $('.layer2').addClass('disappear');
    $('.popup:not(.layer2)').css('animation','reverse-layer 600ms forwards');
    $('.popup:not(.layer2)').removeClass('second');
    $('.layer2, .overlay2').remove();
  });
}



$(document).ready(function() {
  cardsData();
  popupContent(0);
  $('.redeem').click();
  tableData();
  $('.cluster-license').click(function(){popupContent(0)});
});
