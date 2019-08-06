		function $(id){
			return document.getElementById(id);
		}
		
		function getScrool(){
		if(window.pageXOffset){
		    return {"top":window.pageYOffset,"left":window.pageXOffset};
		}else if(document.compatMode=='CSS1Compat'){
		    return {"top":document.documentElement.scrollTop,"left":document.documentElement.scrollLeft};
		}else{
		    return {"top":document.body.scrollTop,"left":document.body.scrollLeft};
		}
		}

		 function getStyle(obj,attr){//对象，对象的什么属性
  				if(window.getComputedStyle){//正常浏览器支持的api(chrom,IE9+,firefox)
	  					return window.getComputedStyle(obj,null)[attr];
  				}else{//IE6/7/8
  					return obj.currentStyle[attr];

  				}
		
		
		
		
		var navTop=$('ct-nav').offsetTop;
          var code = document.getElementById('code');
          var submenu = $('submenu');
          var app = document.getElementById('app');
          var arrow = document.getElementById('arrow');
          app.onmouseover = function(){
          code.style.display = 'block';
          }
          app.onmouseout = function(){
              code.style.display = 'none';
          }
         
          window.onscroll=function(){
                    if(getScrool().top>=navTop){
                        $('ct-nav').className='ct-nav fix';
                        submenu.style.top = '50px';
                    }else{
                         $('ct-nav').className='ct-nav';
                         submenu.style.top = '';
                    }
                    if(getScrool().top >=100 ){
              arrow.style.visibility = 'visible';
            }else{
              arrow.style.visibility = 'hidden';
              }
            }
              arrow.onclick = function(){
                //缓动动画
                clearInterval(timer)
                var scrollTop = document.body.scrollTop || document.documentElement.scrollTop; 
                var target = 0;
                var leader =scrollTop;
                var timer = setInterval(function(){
                  
                  leader = Math.floor(leader + (target - leader) / 20);
                  if(leader <= target){
                    clearInterval(timer);
                  }
                  console.log(leader);
                  document.body.scrollTop = leader;
                  document.documentElement.scrollTop= leader;
                }, 10);
              }
                 }
          