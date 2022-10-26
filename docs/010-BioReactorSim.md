---
layout: default
choices:
    - engine: Unity 3D
      icon: https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/unity-512.png
    - engine: Blender
      icon: https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/293px-Blender_logo_no_text.svg.png
    - engine: Omniverse
      icon: https://docs.omniverse.nvidia.com/con_connect/_images/renderer.png
---

<style>
    img{
        --sz: 64px;
        height: var(--sz);
        width: var(--sz);
        object-fit: contain;
    }
    th{
        text-align: center;
        width: 33.33%;
    }
</style>

> System(s): \
> Macbook Air M2 arm x64

## Engine Choice

<table>
  <tr>
    {% for choice in page.choices %}
    <th>
        <img src="{{choice.icon}}"/> <br/>
        {{choice.engine}}
    </th>
    {% endfor %}
  </tr>
  <tr>
  <th></th>
  <th></th>
  <th></th>
  </tr>
  <tr>
    <td>
    <!-- Unity -->
    <b>NVIDIA PhysX</b> <br/>
    Physics Engine more game and simulation oriented in logic
    </td>
    <td>
    <!-- Blender -->
    <b>Bullet Physics</b> <br/>
    Is working Engine but not recommended for physics based tasks. Is great for making movies
    </td>
    <td>
    <!-- Omni -->
    <b>NVIDIA PhysX</b> <br/>
    Physics Engine more game and simulation oriented in logic
    </td>
  </tr>
  <tr>
    <td>
    <!-- Unity -->
    Physics Engine more game and simulation oriented in logic
    </td>
    <td>
    <!-- Blender -->
    Blender is most suitable for 3D modelling, compositing and VFX. It is more versatile but is NOT suitable for Realtime rendering i.e any form of simulation
    <br/>
    It has a working Physics Engine but is not recommended for physics based tasks. Is great for making movies
    </td>
    <td>
    <!-- Omni -->
    Is direct Competitor to Unreal engine. NEEDS NVIDIA graphic card to run
    </td>
  </tr>
</table>



Unity 3D vs Blender feature diff
Bioreactor digital twins (few companies)

Unity: Possible in unity but not meant for that - has better physics engine has more game oriented and simulation oriented logic. Is in C#