<template>
  <footer class="bg-[#032541] w-full">
    <div class="max-w-screen-xl flex items-center flex-wrap justify-between mx-auto p-4 py-6">
      <div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIA0lEQVR4nNVaa6xcVRUeBRRfgIESTQg+CPKGWCn6Ax8hESoggoUoTyGQ1KYCIhr+KLcWDG3P3tPeQCA3tN47a82ADIKJgIHwuC3UpsBZa+bWiohYa3m2lMZXaUtpr1l7rz13z5kzc2duS9u7kpPMOWe/vr3X41vrTKEwAbEMpxjCn1jCqmUcsQSbDOO7huEdS/CKIagZBjQMsxLG4wv7ksxfvvgTsnjD+IJlHO3lMgwkoGSMvQagb3h4/4TgBkPwdrSw1w3h4oRKlxdTnHr7s6VDB9KBA+yK6kfmjeARhipfsoQzLSNYwvWNfgRvGsZr+kb7PrhHQSwcwWMsITd2l2A4qeE51Wp1v9DG1iqnWYarbQ1/5i73u3JaYyNWVz9ka3CRZXxmbCPw+eJzlc/vERBFgm9bwv8ogJeKNTwzfi+nYAiXtlUnwqXSJu6TMF5oCP+hY26yXDr7fQVhCS+zDNtVHYaSOnws28YQlvT925awbAiMXPLbL9L3zfbrX4kHWYL7VUXfM4zXv38nwQqC8Rd5bUZHRz9gCf8nbRIqfyb7Xp4pkP9K27wxDOMt0en1t2s3YZuQyTuBEOkbHjzQEOwUlysG3vp+eH9LsE3a9L/U/+F241iCuRGYxbvFCfjJvWHnqURWDMGLqh6zWt6lMFs344VOY8gpGMZ7I2dy9y6fjLjYYNh5NtGy2Bpcqe23iTqOjVP6rjspxtEi4w/GG8fZDMPaMUcBt+5isPNxwqSlsxqLlXjgXCeckguG8S49wZ2WYYlc/rcAxDvz+ti0fJLzXvXSF5vtMvZ65UsmBMTRDY0Tcj+QDnzUED6ScanPFFP8dNxP1EBPckvUbos8y6rIgmcHP2UZn2wak+BhmctvCjwdxZnNSR1O7B2I0g4Jdm7XGO/QATdawt9F0Xkkz3jnc+VoS3CbXPI7+176GMK6ntR6Q1AxhBsUzCI3Z4oXZDZuZU/GL2oTaIcYvEkrh7kdJtyRME6TNkkdDjeM//TuFm6Y8IkzrO3nJVN04V9Rz7d5YW3wEHU26xuxyYP8Uc+TiPtz94zX6/0jcTvRa53kxd6BeA8nY8TPLcMTzilQ6YdxkLWEdxrCrYbh38LduppEqfioEEAF8nu34BpcGrcTftXYsbRybNcg0sqxQaVijqZArtadv9+vBa7S+3tCwAwbPD4QySdkV1KcqvdvOGB1+FzLoggf92619J1ugViCGXqST7WMVy99QVVundwnjNMatuipzCY5GXEU407kDJpxNBA8y/CW3C9KS0c2nQbDrV6n4b0sSHEShvBVSaoSLn8rh0HvcG6ZcE5swBGVedPd1+FwPZFX/CbgHHU6t3SzY9uksdBtDwQfCO7WMF5sGH5qGP+mO7c9L5LLxFFAW5cf6QMJxdVih35sXKEL/W3wbtY7nncCMJ954sZOVCcXyMLa4GeDh2r2+bimmOJX24zREYiI9G1Q+KYL1gbi2R+AEG6Nxn5YwX2zJ9VSMIdYgpsMw4Oa5V0WgOaJqJMHA+sswfR27WSh4lRkTDc2wU3z0urBjfe8ZIqCe6s5pfAMuStjFzpS2MuSqLFL8SI8Ezahtvn3jp0Nw326C1fsicV2Q0QN473xc8vwF/WsTRQpn/UyLOk0iUTehVQ6TtJTSXvzEqoWHlbDbxjCa0WFJEaMx58MwZCu5boMkN84IJl0u0kW0NDJanhvyGKz74XUWYJfBbccVUR2SmLUblwJam3y+ZV5AdVVYcgH3GwtzDLerKz4xk4bIZP+2Ufs8rnxc4kfhuCxyMO85lkxPORcsehuRMfHJi59XT2dFC8GLON86SOUI/C621ZVPhn3MYTn6btV2fEkr9E1DHQEEqnXsqbBGS9Wj/GqSUunZ97drvp8V3Y8oRV5gUw8lCFYrou6ubmPf25yihGSI2mfBzoCuWN19ePBDceR2blev7MzW8AzHh9H5Vjk5PJURETojUbvP2QTK0O4IS87TVL4sr5f2hFIzHot48sCTJ/9WndpXra9UI2QUAn1byrIqQ1JkaK1+qK2Q3B3yE4l2PpxYHbu2iRT9UDq4wJxuQgDqZ6i2wnndRxH2mEJfh5nfRqFHRChEk3jCAUn2BnbgVRbAgihIOG0GsUHguey7LglZyJcPS6QsUzPVxcNQ58fpHyjA+JV7I8Jlb/mdlae6wm2ToyP6jtwAU1sLey6GLxGf0PwS7XNfy1Ih45qt65ibeiEbqoyhSyTHSvQKRiC6XExOs7RDZW/l7eDoT6W4Wssi4pBuIpLB1rTZI+9ABGRKkYo6UgJVGzG6zLMFeMOLjQkY3kiblkyQC2psmSBojquYqPqpCC+P956iilODRvRExAPpnR28PuiPnHBWUjlLhTG1wR1Gu8kgojrD6pdmIg4m2FIG2rE8LQsJo8BtBOJ2BLsovjhDLuTTWRFqImCf6IwUfHRHa+NKYpTL8JBibhFKp0q7lfcrlzyW1isEEDHnZo+9OAGcbHtvFM7MTU4X4E8VNhVkUBlU/yxJfzTBD69rZI41U0ptp3NqmpVC7tTxPP4dBXucx8+nUHDNleBZ9wozzxjhet2x8dQq9WVEN8mrZhGnjLJgSQ+PXb1rsJkluJYtf7RwmQW2yvX2lelfyUeJIVBoUbhM8SkFcuwLP70MWnFSgzrJkvc12VeWj24wS4IZhQms1iCGa7gQbi1E/OeFGKEUegHV/nMkaRwxm79s8GelCR8xhjjcyN7e00TFlc49Gn4X+ULwP8BzRgVnCm/zd0AAAAASUVORK5CYII="
          alt=""
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap bg-gradient-to-r from-[#8DCEA3] to-[#06B4E3] bg-clip-text text-transparent"
        >
          Movie Movie
        </span>
      </div>
      <div class="flex gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="100" viewBox="0 0 48 48">
            <polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"></polygon><polygon fill="#455a64" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"></polygon>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="100" viewBox="0 0 50 50">
            <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
        </svg>
      </div>
    </div>
    <p class="text-white text-center font-thin">
      © Todos os direitos reservador - 2024
    </p>
  </footer>
</template>

<script lang="ts" setup></script>
