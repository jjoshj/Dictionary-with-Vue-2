const app = new Vue({
    el: '#form',
    data: {
        title:"Dictionary",
            submit: [],
            meaning:{},
            show_meaning:false,
            value:'',
            
            
      
      
      submitted: {
        name: ''
      }
    },
    
    methods: {
      
      fetchSubmit: function(event){
       
      
        this.submitted.name = this.name;
        let url=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${this.submitted.name}`;
        
      
        console.log("hai",this.submitted.name)
        event.target.reset();
        
      
        axios.get(url).then(res=>{
            this.submit=res.data
            console.log(this.submit)
        })
    },
    reloadPage() {
        window.location.reload();
      }
    },
    mounted(){
        this.fetchSubmit()
    }
  });