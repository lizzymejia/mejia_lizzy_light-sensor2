while (true) {
    console.log("Light Level: " + input.lightLevel())
    if (input.lightLevel() > 80) {
        light.clear()
    } else if (input.lightLevel() < 80) {
        light.setAll(light.rgb(255, 255, 0))
    }
    
}
