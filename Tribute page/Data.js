const life =[
    {
    0:"1879 :Born in	14 March 1879 Ulm, Kingdom of Württemberg, German Empire",  
  },
    {
      1:"1895 : In 1895, at the age of 16, Einstein took the entrance examinations for the Swiss Federal polytechnic school in Zürich"    
    },
   {
      2:"1895 : In 1895, at the age of 16, Einstein took the entrance examinations for the Swiss Federal polytechnic school in Zürich"    
    },
   {
     3:"1900 : Einstein's paper 'Folgerungen aus den Capillaritätserscheinungen' was published in the journal Annalen der Physik. "
   } ,
    {
      4:"1908 : By 1908, he was recognized as a leading scientist and was appointed lecturer at the University of Bern "
    },
    {
      5: "1913 : On 3 July 1913, he became a member of the Prussian Academy of Sciences in Berlin."
    },
    {
      6:"1916 : In 1916, Albert Einstein published his general theory of relativity in full mathematical detail. That opened the window on a radically new framework for physics, abolishing established notions of space and time and replacing Newton's formulation of the laws of gravity. "
    },
    
    { 
      7:"1921–1922 : Einstein visited New York City for the first time on 2 April 1921, where he received an official welcome by Mayor John Francis Hylan, followed by three weeks of lectures and receptions."
    },
    {
      8:"1930–1931 : In December 1930, Einstein visited America for the second time, originally intended as a two-month working visit as a research fellow at the California Institute of Technology. After the national attention, he received during his first trip to the US, he and his arrangers aimed to protect his privacy. Although swamped with telegrams and invitations to receive awards or speak publicly, he declined them all."
    },
    {
      9:"1933 : 'Emigration to the US' In February 1933, while on a visit to the United States, Einstein knew he could not return to Germany with the rise to power of the Nazis under Germany's new chancellor, Adolf Hitler."
    },
     { 
      10:"1955 :Died on	18 April 1955 (aged 76) Princeton, New Jersey, U.S."
   },
    
    
  ];
  
  var data = document.getElementById("life-events");
  
  data.innerHTML='<ul>' + life.map(function (el,index) {
    return( 
    
        '<li>' + el[index] + '</li>'
    );
  }).join('') + '</ul>';