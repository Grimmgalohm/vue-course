<template>
    <li>
        <h2>{{name}} {{isFavorite ? '(favorite)':''}}</h2>
        <button @click="toggleFavorite">Add Favorite</button>
        <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone: </strong>{{phoneNumber}}</li>
            <li><strong>Email: </strong>{{emailAddress}}</li>
        </ul>
        <button @click="$emit('delete', id);">Delete</button>
    </li>
</template>

<script>

export default ({
    // props:[
    //     'name',
    //     'phoneNumber',
    //     'emailAddress',
    //     'isFavorite'
    // ],
    props:{
        id:{    
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        phoneNumber:{
            type: String,
            required: true
        },
        emailAddress:{
            type: String,
            required: true
        },
        isFavorite:{
            // type: String,
            type: Boolean,
            required: false,
            default: false
            // default: '0',
            // validator: function(value){
            //     return value === '1' || value === '0';
            // }
        },
    },
    emits:{
        // emits: ['toggle-favorite'],
        'toggle-favorite': function(id){
            if(id){
                return true;
            }else{
                console.warn('Missing id');
                return false;
            }
        },
    },
    data(){
        return{
            detailsAreVisible: false,
            friend:
            {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '5555 5555 5555',
                email: 'manuel@localhost.com'
            },
            // friendIsFavorite: this.isFavorite
        }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite(){
            this.$emit('toggle-favorite', this.id);
            // this.friendIsFavorite = !this.friendIsFavorite;
            // if(this.friendIsFavorite === '1'){
            //     this.friendIsFavorite = '0'
            // }else{
            //     this.friendIsFavorite = '1'
            // }
        }
    }
})
</script>
