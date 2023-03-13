<script>
export default {
  name: "DropDownMenu",
  data() {},
};
</script>
<template>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>

      <li>
        <a href="#">About Us</a>
        <ul>
          <li><a href="#">Information</a></li>
          <li><a href="#">School Profile</a></li>
          <li><a href="#">Attendance</a></li>
          <li><a href="#">Announcements</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </li>
      <li><a href="#">Academics</a></li>
    </ul>
  </nav>
</template>

<style scoped lang="sass">

body
  font-family: Helvetica
  background-color: #333

/* Dropdown */
nav
  background: white
  a
    color: #6bd5d5
    display: block
    text-decoration: none
    &:hover
      color: blue

  ul
    list-style: none
    li
      float: left
      position: relative
      ul
        display: none
        position: absolute
        overflow: auto
        width: 17em
        li
          float: none


      &:hover
        ul
          display: block
</style>
