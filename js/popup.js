
// Popup

const popupData ={
  title :[
    'License Cluster',
    'Reclaim CCUs',
    'Next Steps',
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
    <h2>Congratulations</h2>
    <p> You have successfully made changes on this cluster's licenses. A new cluster summary file is been downloaded, use this file to update the license state of your cluster.</p> 
      `,
  ],

  footer:[
    `<button class="primary redeem btn-disabled">Next</button>`,

    `<button class="primary reclaim btn-disabled">Reclaim</button>`,

    `<button class="secondary cancel" style="margin-right:0"> Done </button>`,

    `<button class="secondary cancel"> Cancel </button>
     <button class="primary congrats"> Save Changes </button>`,

    `<button class="secondary cancel" style="margin-right:0"> Done </button>`,

    `<button class="primary add-node btn-disabled">Next</button>`,
  ]
}


const layer2Data = {
  body:[
  `
    <div class="popup-header">${popupData.title[0]}</div>

      <div class="popup-body panels">

        <div class='panel1'>
        <p style='margin-bottom:20px; margin-top:-3px; color:#22272E'> Licensing costs have been calculated based on <kbd class='tooltip-trigger'>cluster's capacity </kbd></p>

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
          <h3 style='margin-bottom:19px;''>Cluster licensing costs in <kbd class='tooltip-trigger2'>CCUs </kbd></h3>

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
              <div class='grower'></div>
          <div class='separator' style='margin-top:0px;'></div>

          <p>Licensed until 12/12/20<br>based on CCU validity dates.</p>
        </div>

      </div>

    <div class="popup-footer">${popupData.footer[3]}</div>
`,

`
  <div class="popup-header">${popupData.title[3]}</div>
  <div class="popup-body">
    <span class='count money'>4000</span>
    <p style='margin-bottom:20px;'> Their expiration date is 12/12/2020</p>
    <h3> You have reclaimed all the unused CCUs available on this cluster, and has been acredited to your account.</h3>
  </div>
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

  $('.congrats').click(function(){
    $('.popup').addClass('disappear');
    $('.overlay').removeClass('show');
    $('html').css('overflow','');
    setTimeout(function(){
      $('.overlay').fadeOut('slow');
      setTimeout(function(){popupContent(2).fadeIn();},200);
    },600);
  });
}
