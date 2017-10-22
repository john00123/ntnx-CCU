const cardData ={
  cardInfo : ['Current plan','Payment Method','Tax documents','Available Credit'],
  cardBody :['Pay as you go','Credit Card','221-222-333-44', '$5000.00'],
  cardSecondary : ['Renews end of day June 22','Visa ending 4204 · Exp 12/19','Last updated Oct 2016', 'Updates every end of billing cycle'],
}

const billingData ={
  Months
  :['Nov 15, 2017','Oct 15, 2017','Sep 15, 2017','Feb 15, 2017','Jan 15, 2017'],
  Ammounts :['5400.00','2827.00','3100.00','0.00','0.00'],
  Plan:['Pay as you go', 'Pay as you go','Pay as you go', 'Free Trial plan', 'Free Trial plan'],
  Download:[
  '<a class="link" href="pdf/004174.pdf" target="_blank">Download</a>',
  ],
}

const usageData ={
  Title:['CPU hours','Data encryption','Support fees'],
  Numbers :['15000','1000','-'],
  Ammounts :['750.00','600.00','135.00'],
}

const creditData ={
  Months:['Sep 15, 2017','Jan 15, 2017'],
  Ammounts :['3000.00','2000.00'],
  Plan:['Free Trial plan', 'Free Trial plan'],
  Download:['<a class="link">Download</a>','<a class="link">Download</a>'],
}

// creates cards
function cardsData() {
  var cards = cardData.cardInfo.length;
  var index = 0;
  // function
  while (cards> 0){
    $('.deck').append(
      `<div class='card'>
        <div class='card-title'>
          <h4>${cardData.cardInfo[index]}</h4><a>Edit</a>
        </div>
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
  for(let i=0; i<billingData.Ammounts.length; i++){
    $('.prev-bills').append(
      `<tr>
        <td>${billingData.Months[i]}</td>
        <td>${billingData.Plan[i]}</td>
        <td>$ ${billingData.Ammounts[i]}<kbd class='download-dropdown'>•</kbd></td>

    </tr>`);
  }

  $('.balance').append(`$${billingData.Ammounts[0]}`);
  for(let i=0; i<creditData.Ammounts.length; i++){
    $('.prev-creds').append(
      `<tr>
        <td>${creditData.Months[i]}</td>
        <td>${creditData.Plan[i]}</td>
        <td>$ ${creditData.Ammounts[i]}<kbd class='download-dropdown'>•</kbd></td>
    </tr>`);
  }

  for(let i=0; i<usageData.Ammounts.length; i++){
    $('.usage').append(
      `<tr>
        <td> ${usageData.Title[i]}</td>
        <td> ${usageData.Numbers[i]}</td>
        <td> $ ${usageData.Ammounts[i]}</td>

    </tr>`);
  }
  $('.download-dropdown').click(downloadPDF);
}

// Popup

const popupData ={
  title :[
    'Add Funds',
    'Tax Documents',
    'Payment Method',
    'Change Plan',
  ],

  body: [
    //credits
    `<code class="count money">853</code>
    <h3 style='margin-bottom:0px'>Reedem code</h3>
    <p style='margin-bottom:10px; width:100%'>Get started by adding some funds to your account</p>
    <input type="text" value='' id='redeem-input' autocomplete='off'>
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

    //payment method
    `
    <h4 style='align-self:left; margin-bottom:10px;'>
    <input type='checkbox' id='invoice-only'
    style='margin-right:5px;'></input>
    Use invoice billing</h4>

    <p style='align-self:left; margin-top:10px;'>This service is only available to our enterprise level clients, and it happens mostly offline.</p><br>
    <p>Once you saved we will send a request for a Sales Representative to contact you back.<a class='link' style='margin-left:10px;'>Learn more</a></p>

    <div class='separator'></div>
    <label for="other">Card Number</label>
    <input type="text"  id='old-pswd' ">

    <label for="other">Card Holder's Name</label>
    <input type="text" id='old-pswd'>

    <div class='upload-file' style='margin:0 0 30px 0; padding-bottom:30px; border-bottom:1px solid #F2F4F6;'>
      <div class='info-pair'>
        <label for='month'>Month</label>
        <select class='thirty' name="month" id="month">
        <option value="volvo">Jan</option>
        <option value="saab">Feb</option>
        <option value="fiat">Mar</option>
        <option value="audi">Apr</option>
        <option value="audi">Jun</option>
        <option value="audi">Jul</option>
        <option value="audi">Aug</option>
        <option value="audi">Sep</option>
        <option value="audi">Oct</option>
        <option value="audi">Nov</option>
        <option value="audi">Dec</option>

        </select>
      </div>

      <div class='info-pair'>
        <label for='year'>Year</label>
        <select class='thirty' name="year" id="year">
          <option value="volvo">2018</option>
          <option value="saab">2019</option>
          <option value="fiat">2020</option>
          <option value="audi">2021</option>
        </select>
      </div>

      <div class='info-pair' style='width:145px;'>
        <label for='cvv'>CVV</label>
        <input type='text' id='cvv'></input>
      </div>
    </div>

    <label for="other">Billing Address</label>
    <input type="text" id='old-pswd' style='margin-bottom:20px;'>
    <label for="other">Address 2</label>
    <input type="text" placeholder='street' id='old-pswd'>


    <div class='upload-file'>
    <div class='info-pair' style='margin-right:5px;'>
    <label for='month'>Zip Code</label>
    <input type="text"  id='old-pswd'>
    </div>

    <div class='info-pair' style='margin-left:10px;'>
    <label for='year'>City</label>
    <input type="text"  id='old-pswd'>
    </div>

    <div class='info-pair' style='margin-left:15px;'>
    <label for='month'>State</label>
    <input type="text"  id='old-pswd' >
    </div>

    <div class='info-pair' style='margin-left:15px;'>
    <label for='year'>Country</label>
    <select class='twentyfive' name="year" id="year">
      <option value="volvo">United States</option>
      <option value="saab">Argentina</option>
      <option value="fiat">Armenia</option>
      <option value="audi">Algeria</option>
    </select>
    </div>
    </div>

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
    `<button class="primary redeem">Redeem</button>`,

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
  invoiceOnly();
  radio();
}

$(document).keyup(function(e) {
  if (e.keyCode === 27) $('.popup-header').click();
  if (e.keyCode === 13) $('.primary').click();
});

function radio(){
  $('.radio').click(function(){
    $(".radio").prop("checked", false);
    $(this).prop("checked", true);
  });
}

//counter
function countNumbers(){
  let j = 0;
  $('.redeem').click(function() {
    if($('#redeem-input').val() === 'NTNX'){
      $('#redeem-input').val('');
      $('.popup-body').before(`<div class='banner'>$4200 have been credited to your account.</div>`);
      $('.banner').toggle();
      $('.money').css('color','#18BE5F');
      $('.popup-header').css('border-bottom','none');
      $('.banner').slideDown();
      $('.count').each(function () {
        var $this = $(this);
        $({ Counter:$this.text() }).animate(
          { Counter:4900 }, {
          duration: 600,
          step: function () {
            $this.text(Math.ceil(this.Counter)+100);
          }
         });
      });
      setTimeout(function(){
        $('.banner').slideUp();

        $('.popup-header').css('border-bottom','');
        setTimeout(function(){
          $('.banner').remove();
        },300);
    },7000);
    }
    else{
      $('.banner').remove();
      $('.popup-body').before(`<div class='banner error-ban'>Invalid code</div>`);
      $('.banner').toggle();
      $('.popup-header').css('border-bottom','none');
      $('.banner').slideDown();

      $('#redeem-input').css('color','#F16363');
      $('#redeem-input').css('border-color','#F16363');
      setTimeout(function(){
        $('#redeem-input').css('border-color','');
        $('#redeem-input').css('color','');
      },3000);
      setTimeout(function(){
        $('.banner').slideUp();
        $('.popup-header').css('border-bottom','');
        setTimeout(function(){
          $('.banner').remove();
        },300);
      },3000);
    }
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


//downloadPDF

function downloadPDF(){
  $('.floater').remove();
  $(this).append(
    `<div class='secondary floater'>
    <a href=''>Download PDF</a>
    </div>`
  );
  event.stopPropagation();
  $(document).on("click", function(event)
  {$('.floater').remove();});

  $('tr').mouseleave(function(){
      $('.floater').remove();
  });
}


//invoice only

function invoiceOnly(){
  $('#invoice-only').change(function(){
    if($(this).is(':checked')){
      $('.separator').nextAll().fadeTo( "fast", 0.3 );
      $('.save').addClass('change');
      $('.change').removeClass('save');

      $('.change').off('click').on('click',function(){
        $('.popup').css('animation','layer 600ms forwards');
        $('.popup').addClass('second');
        layer2();
        $('.confirm').click(function(){
          $('.card-body:eq(1) h4').text('Invoice');
          $('.card-body:eq(1) p').text('Request processing');
        });
        });
      }

    else{
      $('.separator').nextAll().fadeTo( "fast", 1 );
    }
  });
}


//Layer 2

function layer2(){
  $('body').append(
    `<div class="overlay overlay2" style='background-color:transparent'>
      <div class="popup layer2" style='opacity:0'>
        <div class="popup-header popup-header2">Confirmation</div>
        <div class="popup-body"><p style='color: #22272E'>We have sent a request for you payment method change, your old payment method will remain active until the change has been processed.</p> </div>
        <div class="popup-footer"><button class="secondary save confirm" style='margin-right:0;'>Close</button></div>
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
  chartData();
  tableData();
  $('.card:eq(0) a').click(function(){
    popupContent(3)
    $('.popup-body').css('min-height','300px');
  });
  $('.card:eq(1) a').click(function(){popupContent(2)});
  $('.card:eq(2) a').click(function(){popupContent(1); ex(); });
  $('.card:eq(3) a').click(function(){popupContent(0)});
  $('.prev-bills td:eq(0)').click(pdfContent);
});
