<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals #default="slotProps">
      <!-- <template #default="slotProps"> Si el conenido va solo a un slot se puede apuntar a ese slot directo desde el template-->
        <h2>{{slotProps.item}}</h2>
        <p>{{slotProps['another-prop']}}</p>
      <!-- </template> -->
    </course-goals>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';
  
export default {
  components:{
    'the-header': TheHeader, //It can be declared as TheHeader only and work fine OR TheHeader: TheHeader
    BadgeList: BadgeList,
    UserInfo: UserInfo,
    CourseGoals: CourseGoals
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>