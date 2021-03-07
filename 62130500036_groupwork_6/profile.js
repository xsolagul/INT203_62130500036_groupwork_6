const constraints = {
    username:{
        presence:true,
    },
    email:{
        presence:true,
        email:true,
    },
    password:{
        presence:true,
    },
    title:{
        presence:true,
    },
    chosenlang:{
      presence:true
    }
    
}
const app = Vue.createApp({
    data() {
        return {
            msg: 'Hello, Vue3',
            name:"thanasit eksoragul" ,
            job:"student",
            one: "fds",
            onevalue: "2",
            two:"sdd",
            twovalue:"4",
            three:"aaa",
            threevalue:"67",
            box1:"chat1",
            box2:"chat2",
            image:"./images/preview.jpg",
            // work6
            username:null,
            email:null,
            password:null,
            title:null,
            chosenlang:null,
            langlists:[{langname:'english'},{langname:'japanese'},{langname:'thai'}],
            errors:null
        }
    },
    methods:{
        checkForm(){
            this.errors = validate({username: this.username,
                                    email:this.email,
                                    password:this.password,
                                    title:this.title,
                                    chosenlang:this.chosenlang},
                                    constraints)
        if(!this.errors){
            alert("Your profile is update successfully.")
        }
        }
    }

})
app.mount('#app')