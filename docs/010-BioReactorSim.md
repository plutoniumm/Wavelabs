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
    <td>January</td>
    <td>
    <!-- Unity: -->
    Unity was built with mobile apps in mind, so development for these devices is very streamlined, both for 2D and 3D titles. Most of the optimizations are meant for small and indie games with limited processing requirements.
    </td>
    <td>$100</td>
  </tr>
</table>



Unity 3D vs Blender feature diff
Bioreactor digital twins (few companies)
NVIdid Omniverse - MORE
	else

Blender 3D modelling - compositing - VFX - more versatile (MORE FOR SILICON) - not for realtime
Has decent pghyics but

Unity: Possible in unity but not meant for that - has better physics engine has more game oriented and simulation oriented logic. Is in C#

Unreal engine slightly better community + resources >> unity

Omnivores competition to Unreal - is new