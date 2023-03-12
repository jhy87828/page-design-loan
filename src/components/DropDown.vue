<template>
  <h2>CSS Dropdown Menu</h2>
  <nav>
    <div class="dropdown hover">
      <a href="#">Hover Menu</a>
      <ul>
        <li><a href="#">Item</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Text</a></li>
        <li><a href="#">Page</a></li>
        <li><a href="#">Thing</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Text</a></li>
      </ul>
    </div>
    <div class="dropdown toggle">
      <input id="t1" type="checkbox" checked />
      <label for="t1">Toggle Menu</label>
      <ul>
        <li><a href="#">Item</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Text</a></li>
        <li><a href="#">Page</a></li>
        <li><a href="#">Thing</a></li>
      </ul>
    </div>
  </nav>
</template>
<style scoped lang="sass">
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700)

$primary-color: #0097B2
$secondary-color: #FFF
$tertiary-color: #666
$quaternary-color: #333
$background-color: #E3F9F9
$box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15)

body
  font-family: "Open Sans", "Arial"
  background: $primary-color

h2
  color: $secondary-color

h4
  color: $tertiary-color

p
  color: $quaternary-color
  font-size: 13px

main
  margin: 50px auto
  width: 500px

section
  margin-top: 30px
  background: $background-color
  padding: 20px
  box-shadow: $box-shadow

.dropdown
  width: 230px
  display: inline-block
  margin-right: 10px
  position: relative

.dropdown.toggle > input
  display: none

.dropdown > a, .dropdown.toggle > label
  border-radius: 2px
  box-shadow: 0 6px 5px -5px rgba(0, 0, 0, 0.3)

.dropdown > a::after, .dropdown.toggle > label::after
  content: ""
  float: right
  margin: 15px 15px 0 0
  width: 0
  height: 0
  border-left: 5px solid transparent
  border-right: 5px solid transparent
  border-top: 10px solid #CCC

.dropdown ul
  list-style-type: none
  display: block
  margin: 0
  padding: 0
  position: absolute
  width: 100%
  box-shadow: $box-shadow
  overflow: hidden

.dropdown a, .dropdown.toggle > label
  display: block
  padding: 0 0 0 10px
  text-decoration: none
  line-height: 40px
  font-size: 13px
  text-transform: uppercase
  font-weight: bold
  color: #999
  background-color: #FFF

.dropdown li
  height: 0
  overflow: hidden
  transition: all 500ms

.dropdown.hover li
  transition-delay: 300ms

.dropdown li:first-child a
  border-radius: 2px 2px 0 0

.dropdown li:last-child a
  border-radius: 0 0 2px 2px

.dropdown li:first-child a::before
  content: ""
  display: block
  position: absolute
  width: 0
  height: 0
  border-left: 10px solid transparent
  border-right: 10px solid transparent
  border-bottom: 10px solid #FFF
  margin: -10px 0 0 30px

.dropdown a:hover, .dropdown.toggle > label:hover, .dropdown.toggle > input:checked ~ label
  background-color: #EEE
  color: $tertiary-color

.dropdown > a:hover::after, .dropdown.toggle > label:hover::after, .dropdown.toggle > input:checked ~ label::after
  border-top-color: #AAA

.dropdown li:first-child a:hover::before
  border-bottom-color: #EEE

.dropdown.hover:hover li, .dropdown.toggle > input:checked ~ ul li
  height:
</style>
