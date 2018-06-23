export function dataH(data) { 
  
    data.GetCoreHistoryResult.map((item,index)=>{
        var before=0
        var beforeHumidity=0
        var beforeTemprature=0
        
          if(item.Barometric!==null){
   
           item.Barometric= item.Barometric -1000
           before=item.Barometric 
        
          } if(item.Barometric==null){
              
                      item.Barometric= before
                  
                    

        
          }
          if(item.Humidity!==null){
            
                    beforeHumidity=item.Humidity 
                
                   } if(item.Humidity==null){
                       
                               item.Humidity= beforeHumidity
                           
                              
                 
                   }
              
                  item.Temprature = 26+Math.random()
                  if(item.LatPosition!==null){item.LatPosition=Number((item.LatPosition +index/100000).toFixed(5))}
                  if(item.LongPosition!==null){item.LongPosition=Number((item.LongPosition +index/100000).toFixed(5))}
        
                  item.Weight=2*(Math.random()*10).toFixed(0)
                  if(item.Weight% 3 == 0){
                    item.Weight=5
                  }else{
                    item.Weight=0
                    
                  }
                  item.sameple = item.Weight
                  item.test = item.Weight

                  item.sameple=2*(Math.random()*10).toFixed(0)
                  if(item.sameple% 7 == 0){
                    item.sameple=5
                  }else{
                    item.sameple=0
                    
                  }

                  item.test=2*(Math.random()*10).toFixed(1)
                  if(item.test% 2.1 == 0){
                    item.test=5
                  }else{
                    item.test=0
                    
                  }


               
                   return item
       })  




       

}



