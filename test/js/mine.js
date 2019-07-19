


var person = [
 {imgsrc:"img/egypt-1-1080x675.jpg", title:"EGYPT TANGBIA", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",maincap:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing"}    
]

$(document).ready(function(){
    for(var i=0;i<12;i++){
        var card = '<div class="test col-lg-3 col-md-6 col-sm-12" style="text-align: center;" data-toggle="modal" data-target="#exampleModalCenter"><img class="img-fluid" src="'+person[0].imgsrc+'" /><div class="caption"><h6 class="mt-3">'+person[0].title+'</h6><p>'+person[0].desc+'</p></div></div>'
        $('.cards-wrapper .row').append(card)
        
    }


    
    $('.test').click(function(){
        
        view='<div class="tt"><div class="media"><img style="width: 250px;height: 250px" src="'+person[0].imgsrc+'" class="align-self-start mr-3 img-fluid" alt="..."><br><div class="media-body"><h5 class="mt-0"  style="color: #66ccff;">'+person[0].title+'</h5><p>'+person[0].maincap+'</p></div></div></div>'
        $('.modal-body').append(view);
        
    })
    $('.modal-header button').click(function(){
        $('.modal-body').find('.tt').remove();
    })
})

