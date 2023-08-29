const logo = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zOnhvZG09Imh0dHA6Ly93d3cuY29yZWwuY29tL2NvcmVsZHJhdy9vZG0vMjAwMyIKCSB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI1MDAgMjUwMCIKCSBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAwIDI1MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGcgaWQ9IkxheWVyX3gwMDIwXzEiPgoJPGcgaWQ9Il8yMjM0NDYzMDM5NzQ0Ij4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODQ5LDEzODQuN2M1Ni4xLDAsMTEwLjYtMTguNywxNTUtNTIuOUw2NDguOSw5NzYuN2MtODUuNywxMTAuNi02NS40LDI2OS40LDQ1LjIsMzU1LjEKCQkJYzQ0LjQsMzMuNSw5OC45LDUyLjIsMTU1LDUyLjJsMCwwVjEzODQuN3oiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTkwNC4xLDExMzEuNmMwLTU2LjEtMTguNy0xMTAuNi01Mi45LTE1NWwtMzU1LjEsMzU1LjFjMTEwLjYsODUuNywyNjkuNCw2NS40LDM1NS4xLTQ1LjIKCQkJQzE4ODUuNCwxMjQyLjIsMTkwNC4xLDExODcuNywxOTA0LjEsMTEzMS42eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMDgzLjEsNzQ1LjRsLTE1Ny4zLDE1Ny4zYzEyNi4xLDE1MS44LDEwNi43LDM3Ni45LTQ1LjIsNTAzLjhjLTEzMy4xLDExMS4zLTMyNS41LDExMS4zLTQ1OC42LDAKCQkJTDEyNTAsMTU3OC42bC0xNzIuMS0xNzIuMWMtMTUxLjgsMTI2LjEtMzc2LjksMTA2LjctNTAzLjgtNDUuMmMtMTExLjMtMTMzLjEtMTExLjMtMzI1LjUsMC00NTguNmwtODAuMi04MC4ybC03Ni4zLTc3LjEKCQkJQzMyNSw4OTcuMywyNzYuNywxMDcxLjcsMjc2LjcsMTI1MGMwLDUzNy4zLDQzNiw5NzMuMyw5NzMuMyw5NzMuM3M5NzMuMy00MzYsOTczLjMtOTczLjMKCQkJQzIyMjQuMSwxMDcyLjUsMjE3NC4zLDg5Ny4zLDIwODMuMSw3NDUuNHoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTk1My45LDU3OGMtMzcwLjYtMzg4LjUtOTg2LjUtNDAzLjMtMTM3NS4xLTMyLjdjLTExLjcsMTAuOS0yMi42LDIxLjgtMzIuNywzMi43CgkJCWMtMjQuMSwyNS43LTQ2LjcsNTIuMi02OC41LDc5LjRsNzcyLjQsNzcyLjRsNzcyLjQtNzcyLjRDMjAwMS40LDYyOS40LDE5NzgsNjAyLjksMTk1My45LDU3OHogTTEyNTAsNDAzLjYKCQkJYzIyNy40LDAsNDM5LjIsODgsNTk4LjgsMjQ3LjZMMTI1MCwxMjUwTDY1MS4yLDY1MS4yQzgxMC4xLDQ5MC44LDEwMjIuNiw0MDMuNiwxMjUwLDQwMy42eiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo='
const currencyLogo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAAC7CAMAAAAKTh9YAAAAYFBMVEVHcEz////////////////////////////////////j++ma6qVj5nsl5lAK4zpA6mXO79aD8Zyr87uCvq0J2TkItEkOhl4EeVsKzSwLrxMNtQpjsZG42dEeuxyF2oU6wzjPwJjeAAAACnRSTlMAEUB9r9j/YO+Kf6/iMwAABD1JREFUeAHU1EESQjEMAlBIAq33v7ArV7+OLss7AZOB4IDVI/kW0nQRf+Ca7QvNwg/s7VtpGJP8oPFNybdT4aidoPHEcYZn6ymnEEOjH8KPk0zeTI+DLacpfMhpxKTGnFtDB9o8/Jisw8uxh1/OtGIrYw9Ah9pEOVWhnaoxTvWCnErR2Z3rzX59JMYOAkEYXr1gRJfIzP1PalbOpZm2aEf+tcKnCCz7bS37si/7si/7si/7si/7srvRHAE5kJHdbV4wkn076Q9RMMLu04fYnceT/An9JnhMkr19Ezwvvvee73ieOL1dfdN15yQlwas2S7vbgTn4iLfaDO0emIPPeLtgZt+AOfhcQHJGdieYg88VLG9k98AUfG7gBRu7YAo+9wpeNLEnYAY+915wkIndQ4Xn9IajgoV9hwbP6b3iqGRhF5zH537VHi3swGl87tft3tB+Ap/7Z9lFhef0z3hndmjwnP4Z32qEAs/po4//Rwao8JzeC3hiMyeACs/ppnMCUlThOf3wxjurObAKz+kHNz5arT0CNHhO5zde7NZ8UYXn9N4K2Utnt8NzOsFL+Kuz2+EJneA5nduN8bmTWsXzKqNzuyX+FZ3rL43Sud0Un/txtV7KqNY+6Hq7Kb71Gxt0W7seX5od/Z6a+8BuGASCMMwraRK4103A9z9leq+Q3zCYC+h7oy7tbr6d4zGd2zme04Ed4AEd2AEe0Kmd4wGd2jke0Kmd4wGd2jke0Kmd4wGd2jke0Kmd4wGd2Tl+B+jQzvH7j/ThnNub4Xd7Rud2gLc9pyM7wO9sz+nEDvA7e8G/0vX2IeTan/DXPdWL+cwD/hl/c3r2lT2u7XbWk31aYt9vesp9yD5Xn1ZPx7svtNtMYwfX9/hqjwAvuq8awIufZwzgxc+RZgAvfn43gBe/N5lxPLAD+sTs2HgnS53jnS51jHfC1CneKVOHeCdNneGdNnWEd+LUCd6pUwd4p04d4J06dYB3tekAL64nSAAvr+PgeGYHdI6ndkDneGoHdI4HdkAvxw/V7IsiegU8sIdSejk+VbIvyumveBY8twdQh51A8PL691x8PBf3HRD8oO33QPhR2mfD8EnZ3wTxXthXRvFe18+H8anbPsqkOVfnnJ6DF/RmPdE5vs69aQiYnoH3rXuzXukcP6jmE3C8734uxAgfgSvM4+D4RcV37SmgZ+BT6/kz0yd6KT5+kcex9bel+fDPupXP+MOs8byl6esGYfRxbDPnanG0OVf+8ODeH9Ks5f+mE50vJlp37d23EQQhFATRr6Yg/4RPuSe9o6tmIni7gN2222677bbbbrvttttuu5sw/7EP1j7kfhO6m5Wbak90Jw7d54NeGsV9jb0y1B+f+P5qpHB08XvD8M4zrq9N7pqje/L8jj/twXa8XOl4uSoe4/363RnvlyOo/LE1R8JnZfywrB7pGLY0Xa/gV5AhY9e5oJHCAAAAAElFTkSuQmCC'
const wrappedLogo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAAC7CAYAAAA9kO9qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA0PSURBVHgB7d1LbFzVHcfx37l3/CDGxgkhxEnU2K1EgxoUN0kVUglhIhbdVAo7dpCiSl2BqbqphIRpuy5u95SwY1XSWlXVIhFXtGqjJsXQSJRCsXklaQiJ8zCxPTP3cv53cuOxZ8bjmbmP8z/n/5GMHcfjmPHXZ86ce++xQpJGxwdRwChCtQ9Q+nU4qt87CIVhCLGeEHP6v/NQag5h8DY8TKOEGcxMziMhCp2iwD0c1V/kE/QnUNxCJGdavxzHmRdfQYfajz2K3HsGKhyHBC7SN6dznUY5eEGP9nNoQ+uxS+Qib6GawL9++QJa1FrsB8fH9D/0sn5rGELka04PuMdwenJ6ozfwN/qB2D/+vP7ZOA4ZzYUZdIfqSQx9Fzj/979s5AbNR3aatvieHs3DoxDCSOqEnssfa7Zys37s0VKiOqmXhUYhhMlCvUwZhI+sF3zj2CV0wU2T4L2GN6Spi4QuOFG612jKXV/9J6j0ZFThRxCCnz2NnrTWTmMqy4snIQRnSk9n1ixL1k5jKuvoQvBGHdPzziqrY4/W0uWAkbDCMDw1Xv2OlWnM6PgwfDULIewxj3I4Eq/OrIzsvpqAEHYZrB7dq6cxD0MI2yg8E8/dK7HvH38SMlcXdqpcb4E49sqFF0LY6VbfqnKil7oCIewVPVH1omtGhbBbdG20hwBjEMJ2AcWuvH0QwnYK+zyE4TCEsF2oaGSXy+yEA3TntPQ4DCHsN+xBCEdI7MIZErtwhsQunCGxC2dI7MIZErtwhsQunCGxC2dI7MIZErtwhsQunCGxC2dI7MIZErtwRgEWU30loK9c+cOCj3DB6v/dtqltS7ffDi/2wFZWffcpbv/IJXh7r8Hfe70SexWKPZjdhPKpzdGLzd/Y9dD9Uzh0BR69VIUeo/somO1D6c0tCN6y50I2hQPPhmCORqauxz9D4cjnLd2u9MY9KL6605noC9+/EN1PaweB9dB9Q/cR3VfcsY+9nW/gWsWpIRRf+hpspUa+RM/T/4OnX7eLol987n7WAwPb2Cnurqdn9cPxZSTBhm9mPfRo1/XUxx0NBtWWX9qN0tR2cMRyNYa+cT2/eDex0KPPqadCvfpzqjpzWK4Kj51D99MfJhY66X7qo+jRlCOWsdNI1clDciM2Be8/9AW6n/gEaaDg6UkuN+xip1Gl1SeirbAheH/0Krp/OIc09fz0v4k+YmSBVewUYBYPoZyD976xgMLjn0INpBui0scv6BGWE1ax06qLl1GAHIOn0D09qvt7biAL9Airdic/nUwLq9iznidyCj4KXb/438l2q/2uR9ObUiaNTex+g6N9aeMQfBx69PaORWTJPyKxJ45iz4vJwVeHrrYupz5XX4vm7mpkARywiT3v0EwMvjr0SH8RefBHeMzb2cTuGXCHmhR8Tej0Pj2y54HLk3g+I7sha7omBF8v9EhPgDxI7BbLM/iGoedpyQcHbGIPDDtBK4/gm4a+lM+3M7zK47IINrGbeDZilsFvZEQPr3UhD3ShBwd8Yp/dBBNlEfxGpy7huV7kIfjkDnDAJvbSqc0wVZrBtzJHD68X9Oie7ZSCHnHz+iFrFZ85+9kBoy+YTiP4dp6MBu/diSwV/3gvuGC1GlOaMvuOTTL4dlddyu/chTDDJ6rlv20BF8xiHzJuVWatJILvaHlRhx68M4AsFF/dxeoyRlaxhws+ln/9dZiuk+CTWEePRveU5+7xrgOcsDuoRHN3DndyO8EndsBIj+6l3w2lNp2h5050cTo3LI+g0sOnbcEnfWSUVmZKJ5IPPg6d4y4MPnYcngBDNMIT2vnLZHQKLO2+RTuQocFqUmqnANz0EX5wZ3QSnUrgvJnwcjcWJ/YYe8yjGbaxExuCT/1cl2VPx9kXxa46OCuy/O8BLP38Pr2mzuMAUj2sYyecg8/spC4dPB3SD/7T33L0wWe9KP15G5Z/sxuY7wZnVuz1SLoe/zS6INt08c5jqr+U29mL9G+rHYt6erMQnRZMf7799ekfDFzqRqBfwvf6EdzwUT6tf0Cv898D15rYCZvg9dy3+Id7jQ8oLCprQidWnc/OZpVmyzK6jp4H+s3dZMi20Il1F2+wCV6HbmrwNoZOrLxSSYJvn62hE2svy5PgW2dz6MTqa1Al+I2zPXRi/QXXEnxzLoROnNhdQIJvzJXQiTNbaUjwtVwKnTi1b4wEv8K10IlzmyRJ8G6GTpzcEczl4F0NnTi7/R234NWmzi/idjl04vRej6yCf/R9qJ4OfmnvTc/p0InzG5tyCR67+tB94FRbwUvoFbKLL3gF3/PAmy0Ffzv0mzx22k2TxH4Lh+DDzVug+pY2HLyEvprEXsX44H0fwcBdUL1fNg1eQq8lsa9BwZemtsNYd1QueG4WvIReS2KvI9rWzdRNVLtXLnpuFHxAu+pK6DUk9jpom73gbD9MFPau3sqiXvDhZzy2kM6axN4ABc9FTfBlBVFLYm9Abcvn1yw2VS7Xffft4PuuAr35/NY800nsddDejP7eazBSg9hJHLw/fBGilsReh8l7z6jFm+v/faGI3u+9Dm/7FxCrSexr0EZLhSOfw1Tqxo3mH6OD3/SD30vwa0jsVTjsKKYWmscefVzvsgS/hsR+C4vQr1xed85e8/ES/CoSO/jsEen9/wJaJcGvcD52LqGrS/p5xHJ7y6ESfIXTsXMJnSL3znX2dUrwDsfOKXT/ww+QBNeDdzJ2dqEvJ3c01+XgnYvd5dBjrgbvVOwS+goXg3cmdgm9lmvBOxG7hN6YS8FbH7uE3pwrwVsdu4S+cS4Eb23sEnrrbA/eytgl9PbZHLx1sUvonbM1eKtiZ/Mbrq8pY0OP2Ri8NbGzCf1iDxZ/sg9Lf3oAprMteCtiZxX6c/dHr5dPHsTSyQMwnU3Bs4+dY+gxCT5brGPnHHpMgs8O29htCD0mwWeDZew2hR7jFrwavA5u2MVeOHTZutBjvIKf0q87/6VmWeIX+1Mfw3TthB7jErynR/auw2fBCavYaacub5vZo0knoce4BN99+B1Wozuv2A2fviQReoxD8DSd4TS6s4nd23vN6FE9ydBjHILv+vZ74IJN7IVDV2CqNEKPmR48zd25rMywiV2NtP/bndOUZugx04P3R86BAz6xGziFySL0mMnBezKyJ8u0+XqWocdMDd7r57EiI7v4tiGP0GNcliVNxCZ2U34vaZ6hx0wLPrie333RCj6xX+xG3kwIPWZS8MH8ZnDAJvbg7ADyZFLoMVOCD84PggM2sZdO5Td6mBh6LO/gg/l+BBfuBgd8pjGzfbnM200OPZZn8OXZIXDB6Amqj9LUvcgSh9BjeQW/pP9dLlgtPZamhjIb3TmFHss6+OJb9yHU0xguWMVOo3vx1R1IG8fQYxT84m/HkDaaq3Ma1Qm7g0o0upfeuAdp4Rx6rDjzzdSDX5p6mNWoTlgeQS2+tBvB7CYkzYbQY2kGv/j6gyi9vxPc+NhxeALcFD2U/7oVatdNeLsWkQT64Vn62R4rQo8FF7YivNIPf+Q8VGHjvxm7kXCxR4/oD6F46lvgSOHAsyEYS2KngdLUdv1cYKcxpyQkjc5KvOPYFLzN7Z+dGJy/Gzdfe4TNmno97GMndPovRV84cqml25X1UVmKPO+js1mhq4q6x860FD09EV1+cz+K/9wD7qyIPUbR0+V7/qEr8Pdeh+orrfp7GrlpulLWR2PLb2y1diRvxh8+F4VPmx35Q6s3PApLXQg+H0B5Ti8EvDuiX6e/+pUVq2Kv5/ZFH3rZ0tW4m4l2COitbJ/NbYWlFdZ/9216wpkWeuKJRfvvJ7l4QzhDYhfOkNiFMyR24QyJXThDYhfOkNiFMyR24QyJXThDYhfOkNiFMyR24QyJXThDYhfOkNiFMyj2OQhhvzkPIeYhhO105zr28G0IYTsVfuRBYQZC2C7EjKdn7RK7sJ+HaQ+lKHaZtwu7lWhkn5mk0GV0Fzabps4r6+xh+AqEsNdx+k8l9gAnIFMZYaNQH0c682I0mFdip6lMGP4KQthGhdPxmyunCwSYhIzuwjZlvBC/uRK7jO7CNkqHPjM5F/9x9YlgNLqHcq6MsAB1fPrFiep3rY6dRncvPAYhuKvTsV/zQef+MYedDyr9GDAGITii6cvpyeO1727kwI9f048FRyEEK+EJnJl8rN7fNL54oxwco5NnIAQX1GsZDafhat0bj44PwlMn9UeNQgiTUehB+Mit01/qWv+yPLohfQKoExDCWHrq0iR0sv7IXu3g+ARC9TyEMEn0ZHT1EmPjD23FwfExBOplfathCJEnWken5cXTk9MbvUlrscdklBd5oWumPX2kv6QPgDaZtqzVXuxkdHwYvtLR42EZ6UXqOog81n7s1faPP6k/0xNyIEokigJX4Yx+/Up0GnqbkceSiT1GS5UFvUwZYEx/5n36ixzW/8SgjPyiqeicrHC+sgGAmtGRvx1dMtph4NW+AiZycfiu2QTRAAAAAElFTkSuQmCC'

export default {
  name: 'gnosis',
  id: '0x64',
  networkId: '100',
  namespace: 'eip155',
  label: 'Gnosis',
  fullName: 'Gnosis Chain',
  logo,
  logoBackgroundColor: '#406958',
  logoWhiteBackground: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjUwMCAyNTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAwIDI1MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojM0U2OTU3O30KPC9zdHlsZT4KPGcgaWQ9IkxheWVyX3gwMDIwXzEiPgoJPGcgaWQ9Il8yMjM0NDYzMDM5NzQ0Ij4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzM1LDE0MjNjNzIsMCwxNDItMjQsMTk5LTY4TDQ3OCw4OTljLTExMCwxNDItODQsMzQ2LDU4LDQ1NmM1Nyw0MywxMjcsNjcsMTk5LDY3bDAsMFYxNDIzeiI+PC9wYXRoPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMDkwLDEwOThjMC03Mi0yNC0xNDItNjgtMTk5bC00NTYsNDU2YzE0MiwxMTAsMzQ2LDg0LDQ1Ni01OEMyMDY2LDEyNDAsMjA5MCwxMTcwLDIwOTAsMTA5OHoiPjwvcGF0aD4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjMyMCw2MDJsLTIwMiwyMDJjMTYyLDE5NSwxMzcsNDg0LTU4LDY0N2MtMTcxLDE0My00MTgsMTQzLTU4OSwwbC0yMjEsMjIxbC0yMjEtMjIxICAgIGMtMTk1LDE2Mi00ODQsMTM3LTY0Ny01OGMtMTQzLTE3MS0xNDMtNDE4LDAtNTg5TDI3OSw3MDFsLTk4LTk5QzYyLDc5NywwLDEwMjEsMCwxMjUwYzAsNjkwLDU2MCwxMjUwLDEyNTAsMTI1MCAgICBzMTI1MC01NjAsMTI1MC0xMjUwQzI1MDEsMTAyMiwyNDM3LDc5NywyMzIwLDYwMnoiPjwvcGF0aD4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjE1NCwzODdDMTY3OC0xMTIsODg3LTEzMSwzODgsMzQ1Yy0xNSwxNC0yOSwyOC00Miw0MmMtMzEsMzMtNjAsNjctODgsMTAybDk5Miw5OTJsOTkyLTk5MiAgICBDMjIxNSw0NTMsMjE4NSw0MTksMjE1NCwzODd6IE0xMjUwLDE2M2MyOTIsMCw1NjQsMTEzLDc2OSwzMThsLTc2OSw3NjlMNDgxLDQ4MUM2ODUsMjc1LDk1OCwxNjMsMTI1MCwxNjN6Ij48L3BhdGg+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==',
  currency: {
    name: 'xDAI',
    symbol: 'xDAI',
    decimals: 18,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    logo: currencyLogo,
  },
  wrapped: {
    address: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
    logo: wrappedLogo,
  },
  stables: { // max. 3 per fiat currency
    usd: ['0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', '0x4ECaBa5870353805a9F068101A40E0f32ed605C6', '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83']
  },
  explorer: 'https://gnosisscan.io',
  explorerUrlFor: ({ transaction, token, address })=>{
    if(transaction) { return `https://gnosisscan.io/tx/${transaction.id || transaction}` }
    if(token) { return `https://gnosisscan.io/token/${token}` }
    if(address) { return `https://gnosisscan.io/address/${address}` }
  },
  endpoints: [ // make sure provider supports batch size of 99 batch requests!
    'https://rpc.gnosis.gateway.fm',
    'https://rpc.gnosischain.com',
    'https://gnosis.blockpi.network/v1/rpc/public'
  ],
  tokens: [ // only major tokens
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "xDAI", "name": "xDAI", "decimals": 18, "logo": currencyLogo, "type": "NATIVE"},
    {"address": "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d", "symbol": "WXDAI", "name": "Wrapped XDAI", "decimals": 18, "logo": wrappedLogo, "type": "20"},
    {"address": "0x4ECaBa5870353805a9F068101A40E0f32ed605C6", "symbol": "USDT", "name": "Tether", "decimals": 6, "logo": 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png', "type": "20"},
    {"address": "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png', "type": "20"},
    {"address": "0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb", "symbol": "GNO", "name": "Gnosis", "decimals": 18, "logo": 'https://cdn.sushi.com/image/upload/f_auto,c_limit,w_16,q_auto/tokens/100/0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb.jpg', "type": "20"},
    {"address": "0xD057604A14982FE8D88c5fC25Aac3267eA142a08", "symbol": "HOPR", "name": "HOPR", "decimals": 18, "logo": 'https://hoprnet.org/assets/icons/hopr_icon.svg', "type": "20"},
  ],
  zero: '0x0000000000000000000000000000000000000000',
  maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
}
