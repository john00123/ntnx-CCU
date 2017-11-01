
// Popup

const popupData ={
  title :[
    'License Cluster',
    'Reclaim CCUs',
    'Reclaim',
    'CCUs Reclaimed'
  ],

  body: [

    // License Cluster
    `
    <h3 style='margin-bottom:0px'>
      Select your cluster summary file
    </h3>

    <p style='margin-bottom:20px; width:100%'>
      This helps us find all available licenses for a selected cluster
    </p>

    <input type="file" id='file' accept=".xml">
    <label for='path2'>Select file</label>

    <div class='upload-file'>
      <input class='path' readonly type='text' id='path2'></input>
      <label class='file-button' for='file'>Select File</label>
    </div>`,


    //Reclaim data
    `
    <h3 style='margin-bottom:0px'>
      Select your cluster summary file
    </h3>

    <p style='margin-bottom:20px; width:100%'>
      This helps us find all available licenses for a selected cluster
    </p>

    <input type="file" id='file' accept=".xml">
    <label for='path2'>Select file</label>

    <div class='upload-file'>
      <input class='path' readonly type='text' id='path2'></input>
      <label class='file-button' for='file'>Select File</label>
    </div>`,


    // change plan
    `
    <div class="section1">
      <h1>
      <input type='radio' class='radio'checked="checked"> Pay as you go plan. <code style="  margin-left: 10px;">Current Plan</code>

      </h1>
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
    `<button class="primary redeem btn-disabled">Next</button>`,

    `<button class="primary reclaim btn-disabled">Reclaim</button>`,

    `<button class="primary save">Save</button>`,

    `<button class="secondary cancel"> Cancel </button>
     <button class="primary save"> Save Changes </button>`,

    `<button class="secondary cancel" style="margin-right:0"> Done </button>`,
  ]
}


const layer2Data = {
  body:[
  `
    <div class="popup-header">${popupData.title[0]}</div>

      <div class="popup-body panels">

        <div class='panel1'>
        <p style='margin-bottom:20px;'> Licensing costs have been calculated based on cluster capacity <code class='tooltip-trigger'> See capacity </code></p>
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
          <h3 mar> CCUs required</h3>
          <div class=flexbox-stretch>
            <kbd>${licensePrices[0].key}</kbd> <code>${licensePrices[0].price}</code>
          </div>

          <div class='separator prices'></div>

          <div class=flexbox-stretch>
            <kbd>Subtotal</kbd>
            <code class='subt'>${sum}</code>
          </div>

          <div class=flexbox-stretch>
            <kbd>Available</kbd>
            <code class='av'>${cardData.cardBody[1]} </code>
          </div>

          <div class='separator'></div>

          <p> * Valid until Dec 12 2020 <br>based on CCU expiration dates.</p>
        </div>

      </div>

    <div class="popup-footer">${popupData.footer[3]}</div>
`,

`
  <div class="popup-header">${popupData.title[3]}</div>
  <div class="popup-body"> <h3> You have reclaimed all the unused CCUs available on this cluster </h3></div>
  <div class="popup-footer">${popupData.footer[4]}</div>
`,

]
}

// Cluster license

function layer2(i){
  $('body').append(
    `<div class="overlay overlay2" style='background-color:transparent;'>
      <div class="popup layer2" style='opacity:0; width:500px;'>
      <div> ${layer2Data.body[i]}</div>
      </div>
    </div>`
  );

  $('.back, .popup-header2').click(function(){
    $('.layer2').addClass('disappear');
    $('.popup:not(.layer2)').css('animation','reverse-layer 600ms forwards');
    $('.popup:not(.layer2)').removeClass('second');
    $('.layer2, .overlay2').remove();
  });

  if (i===1){
    $('.layer2').css('width','400px');
  }

  popAnimate();
  CheckoutData();
  CheckoutData2();
  CheckoutData3()
}
