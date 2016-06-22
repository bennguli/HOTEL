var step=1
                function Slideit (){
                    Document.images.slide.src=eval("image"+step+"src")
                    if(step<3)
                        step++
                        else
                            step=1
                            setTimeout("slideit()",2500)
                
                } 
            Slideit
            //-->
        </script>
