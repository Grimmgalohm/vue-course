const app = Vue.createApp({
    data(){
        return{
            output: '',
            value: '',
            confirmedValue: '',
            cookieValue:{
                value: true,
                gustavoesgay: true
            }
        }
    },
    methods:{
        setValue(event){
            this.value = event.target.value;
        },
        alertme(){
            alert("Esto es una alerta de prueba");
        },
        confirmInput(){
            this.confirmedValue = this.value;
        },
        setCookie(cname, cvalue, exdays){
            var d = new Date(); d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/"
        },
        getCookie(cname){
            var results = document.cookie.match ( '(^|;) ?' + cname + '=([^;]*)(;|$)' );
            if ( results )
                console.log( decodeURIComponent(results[2] ) );
            else
                return "";
        },
        deleteCookie(name){
            var pathBits = location.pathname.split('/');
            var pathCurrent = ' path=';
            document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;';
            for (var i = 0; i < pathBits.length; i++) {
                pathCurrent += ((pathCurrent.substr(-1) != '/') ? '/' : '') + pathBits[i];
                document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;' + pathCurrent + ';';
            }
        }
    },
    onload:{
        cookieComp(){
            var comprobacion = this.getCookie('testcookie');

            if(comprobacion.isAccepted){
                
            }
        }
    }
});

app.mount('#assignment');