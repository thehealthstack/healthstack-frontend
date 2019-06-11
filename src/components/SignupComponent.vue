<template>
  <div class="level signup-section">
    <div class="level-left">
      <p class="text has-text-white is-size-1">
        We provide services<br>
        which helps you provide<br>
        a happy experience to <br>
        your customers.
      </p>
    </div>
    <div class="level-right">
      <form class="box">
        <div class="field is-grouped">
          <div class="control">
            <input class="input" type="text" placeholder="First Name" required>
          </div>
          <div class="control">
            <input class="input" type="text" placeholder="Last Name" required>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input class="input" type="email" placeholder="Email" required>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input class="input" type="tel" placeholder="Phone Number with Country Code" required>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <div class="select is-fullwidth">
              <select>
                <option>Centre Pasteur Cameroun</option>
                <option>Prima Laboratory</option>
                <option>Labo GT</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input class="input" type="password" placeholder="Password" required>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input class="input" type="password" placeholder="Password Confirmation" required>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-link">Signup</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "SignupComponent"
};
</script>


<style>
.signup-section{
  background-color: #071e3d;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='496' height='496' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%231f4287' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23278ea5'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
  padding: 3% 2%;
}
</style>
