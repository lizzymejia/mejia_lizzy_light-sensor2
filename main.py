while True:
    print("Light Level: " + input.light_level())
    if input.light_level() > 80:
        light.clear()
    elif input.light_level() < 80:
        light.set_all(light.rgb(255,255,0))