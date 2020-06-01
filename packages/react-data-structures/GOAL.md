## There is a dataset here

The goal is to take the dataset and render each object as a Vertex. Descendents that contain objects - should be set as Vertices
with the parent referencing it via an Edge.


I.E

```bash 
11                    
  ¦--12                
  ¦   ¦--13            
  ¦   ¦   ¦--t4        
  ¦   ¦   °--t6        
  ¦   °--t10           
  °--14                
      ¦--15            
      ¦   ¦--16        
      ¦   ¦   ¦--17    
      ¦   ¦   ¦   ¦--t5
      ¦   ¦   ¦   °--t7
      ¦   ¦   °--t2    
      ¦   °--18        
      ¦       ¦--t1    
      ¦       °--t9    
      °--19            
          ¦--t3        
          °--t8 
```