<template>
    <section>
        <header><h1>My Friends</h1></header>
        <new-friend @add-contact="getContact"></new-friend>
        <ul>
            <friend-contact
            v-for="friend in friends"
            :key="friend.id"
            :id="friend.id"
            :name="friend.name"
            :phone-number="friend.phone"
            :email-address="friend.email"
            :is-favorite="friend.isFavorite"
            @toggle-favorite="toggleFavoriteStatus"
            @delete="deleteContact"
            ></friend-contact>
            <!-- <friend-contact
            name="Julie Jhones"
            phone-number="655 555 5555"
            email-address="Julie@localhost.com"
            ></friend-contact> -->
        </ul>
        <user-data
         @user-data="getUserData"
        ></user-data>
        <active-user
        v-for="user in activeUser"
        :key='user.id'
        :userName='user.user_name'
        :userAge='user.user_age'
        ></active-user>
    </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue'
import NewFriend from './components/NewFriend.vue';
import UserData from './components/UserData.vue';
export default {
  components: { FriendContact, NewFriend, UserData },
    data(){
        return{
            friends:[
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '5555 5555 5555',
                    email: 'manuel@localhost.com',
                    isFavorite: true
                },
                {
                    id: 'julie',
                    name: 'Julie Jhones',
                    phone: '5555 5555 5555',
                    email: 'julie@localhost.com',
                    isFavorite: false
                }
            ],
            activeUser:[
              {
                id: 'asdf',
                user_name: 'César Luna',
                user_age: '29'
              },
              {
                id: 'asdfe',
                user_name: 'César Luna 2',
                user_age: '29'
              }
            ]
        }
    },
    methods:{
        toggleFavoriteStatus(friendId){
            const identifiedFriend = this.friends.find((friend) => friend.id === friendId);
            identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
        },
        getContact(a, b, c){
          const NewFriendContact = {
            id: new Date().toISOString(),
            name: a,
            phone: b,
            email: c,
            isFavorite: false
          };
          if(NewFriendContact.name !== '' || NewFriendContact.phone !== '' || NewFriendContact.email !== ''){
            this.friends.push(NewFriendContact);
          }else{
            alert('Data is incomplete');
          }
        },
        deleteContact(contactId){
          this.friends = this.friends.filter(friend => friend.id !== contactId);
        },
        getUserData(name,age){
          const newUserData = {
            id: new Date().toISOString(),
            user_name: name,
            user_age: age
          };
          this.activeUser.push(newUserData);
        }
    }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form,
#active-user{
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input{
  font: inherit;
  padding: 0.15rem;
}
#app label{
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div{
  margin: 1rem 0;
}
</style>