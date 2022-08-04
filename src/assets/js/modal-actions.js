function openModal(size, margin) {

    $(".modalx-dialog")
    .removeClass("modalx-xs")
    .removeClass("modalx-sm")
    .removeClass("modalx-md")
    .removeClass("modalx-lg")
    .removeClass("modalx-xl")
    .removeClass("modalx-0")
    .removeClass("modalx-16")
    .removeClass("modalx-24")
    .removeClass("modalx-32")
    .removeClass("modalx-40")
    .removeClass("modalx-0-24")
    .removeClass("modalx-fullmobile")
    .removeClass("modalx-fullviewport")
    .removeClass("feel-bg")
    ;


    $(".modalx-close, .modal-title").removeClass("hidden");
    $(".modalx-backdrop").removeClass("bg-transparent");
    
    if(size === "SIZE_XS"){
      $(".modalx-dialog").addClass("modalx-xs");
    }
    else if(size === "SIZE_S" ){
      $(".modalx-dialog").addClass("modalx-sm");
    }
    else if(size === "SIZE_M" ){
      $(".modalx-dialog").addClass("modalx-md");
    }
    else if(size === "SIZE_L" ){
      $(".modalx-dialog").addClass("modalx-lg");
    }
    else if(size === "SIZE_XL" ){
      $(".modalx-dialog").addClass("modalx-xl");
    }


    if(margin === "MARGIN_0"){
      $(".modalx-dialog").addClass("modalx-0");
    }
    else if(margin === "MARGIN_16") {
      $(".modalx-dialog").addClass("modalx-16");
    }
    else if(margin === "MARGIN_24") {
      $(".modalx-dialog").addClass("modalx-24");
    }
    else if(margin === "MARGIN_32") {
      $(".modalx-dialog").addClass("modalx-32");
    }
    else if(margin === "MARGIN_40") {
      $(".modalx-dialog").addClass("modalx-40");
    }
    else if(margin === "MARGIN_0_24") {
      $(".modalx-dialog").addClass("modalx-0-24");
    }


    document.getElementById("modal-container").classList.toggle("modal-open");

  };
  
  function modalHideX(){
    $(".modalx-close").toggleClass("hidden");
    
    setTimeout(() => {
      $(".modalx-close").removeClass("hidden");
    }, 5000);
  }

  function modalHideTittle(){
    $(".modal-title").toggleClass("hidden");
  }

  function modalXfullM(){
    $(".modalx-dialog").toggleClass("modalx-fullmobile");
  }
  
  function modalFullWp(){
    $(".modalx-dialog").toggleClass("modalx-fullviewport");
  }
  
  function modalFeelBg(){
    $(".modalx-dialog").toggleClass("feel-bg");
  }
  
  // function modalCloseBc(){
  //   $(".modalx-dialog").toggleClass("");
  // }
  
  function modalBgtransparent(){
    $(".modalx-backdrop").toggleClass("bg-transparent");
  }
  
  
  function modalOptionsToggle(){
    $(".start-options").toggleClass("hidden");
    $(".sidebar-options").toggleClass("visible");
  }


  function modalSizeChange(margin){

    $(".modalx-dialog")
    .removeClass("modalx-0")
    .removeClass("modalx-16")
    .removeClass("modalx-24")
    .removeClass("modalx-32")
    .removeClass("modalx-40")
    .removeClass("modalx-0-24")
    ;

    
    if(margin === "MARGIN_0"){
      $(".modalx-dialog").addClass("modalx-0");
    }
    else if(margin === "MARGIN_16") {
      $(".modalx-dialog").addClass("modalx-16");
    }
    else if(margin === "MARGIN_24") {
      $(".modalx-dialog").addClass("modalx-24");
    }
    else if(margin === "MARGIN_32") {
      $(".modalx-dialog").addClass("modalx-32");
    }
    else if(margin === "MARGIN_40") {
      $(".modalx-dialog").addClass("modalx-40");
    }
    else if(margin === "MARGIN_0_24") {
      $(".modalx-dialog").addClass("modalx-0-24");
    }
  }



  $(".btn-size-change").click(function () {
    $(".btn-size-change").removeClass("disabled");
    $(this).addClass("disabled");
});
  