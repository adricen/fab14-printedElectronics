# Printing Electronic

<a name="introduction">

## Introduction

Through this workshop you wll be able to print led screen with different shapes and form. Many application still need to be done, but the process is promissing and you are going to try and see the full potential of this technic.

Introducing by Michael Wessely and Adrien Centonze

<a name="presentation">

## Presentation

<a name="printscreen">

### PrintScreen: Fabricating Highly Customizable Thin-film Touch-Displays

![header](https://www.lri.fr/~wessely/images/printscreen_teaser.jpg)

PrintScreen is an enabling technology for digital fabrication of customized flexible displays using thin-film electroluminescence (TFEL). It enables inexpensive and rapid fabrication of highly customized displays in low volume, in a simple lab environment, print shop or even at home. We show how to print ultra-thin (120 m) segmented and passive matrix displays in greyscale or multi-color on a variety of deformable and rigid substrate materials, including PET film, office paper, leather, metal, stone, and wood. The displays can have custom, unconventional 2D shapes and can be bent, rolled and folded to create 3D shapes. We contribute a systematic overview of graphical display primitives for customized displays and show how to integrate them with static print and printed electronics. Furthermore, we contribute a sensing framework, which leverages the display itself for touch sensing. To demonstrate the wide applicability of PrintScreen, we present application examples from ubiquitous, mobile and wearable computing.

<iframe width="560" height="315" src="https://www.youtube.com/embed/LiD7dnqY034" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

---

<a name="download">

#### Download

[paper](https://hci.cs.uni-saarland.de/files/2014/10/PrintScreen.pdf)

<a name="citation">

#### Citation

Simon Olberding, Michael Wessely, and Jürgen Steimle. 2014. PrintScreen: fabricating highly customizable thin-film touch-displays. In Proceedings of the 27th annual ACM symposium on User interface software and technology (UIST '14). ACM, New York, NY, USA, 281-290.


<a name="developpement">

## Development

<a name="display">

# EL Display : print screen

<a name="process">

## Process

Using different layer of mixtured ink it is possible to make an electroluminescente display. To succed you will need three different ink and an ITO material to support all those layers. Let's see through list.

| Ito surfaces - Indium tin oxide | phosphorus paste | Dielectric paste | Silver paint |
| --- | --- | --- | --- |
| [![ito Surfaces](assets\img\ito.jpg)](https://www.pgo-online.com/intl/ito.html) | [![phosphor](assets\img\phosphore-small.jpg)](http://www.gwent.org/gem_data_sheets/polymer_systems_products/electroluminescent_display_materials/green_phosphor_c2070209p5.pdf) | [![White EL Dielectric Paste](assets\img\dielectric.jpg)](http://www.gwent.org/gem_data_sheets/polymer_systems_products/electroluminescent_display_materials/dielectric_paste_white_d2070209p6.pdf) | [![conducting silver](assets\img\silver.gif)](http://www.gwent.org/gem_data_sheets/polymer_systems_products/electroluminescent_display_materials/clear_conductor_c2100629d1.pdf) |

<a name="drivenDisplay">

## Driven the display

This kind of display run on AC voltage so an inverter is necessary to transform a 12v DC current to a 220v AC current. You will find some on this adresse : [AC inverter](https://www.watterott.com/index.php?page=404&x7b9f0=5fe347f5949b3300f19685eb2e8f4db8)

In order to succeed, you will need an Arduino and a simple circuits.
Here is an exemple of the kind of circuit you need to do.

<a name="circuit">

## Circuits

![EL Display](http://resources.mpi-inf.mpg.de/conference/invws-15/images/EL_switch.png)

With this setup you'll be able to drive and display LED settings.
Once it's wired, now you have to code it.

<a name="code">

## The code

```C

/*
  Blink
  Turns on an LED on for one second, then off for one second, repeatedly.

  Most Arduinos have an on-board LED you can control. On the Uno and
  Leonardo, it is attached to digital pin 13. If you're unsure what
  pin the on-board LED is connected to on your Arduino model, check
  the documentation at http://arduino.cc

  This example code is in the public domain.

  modified 8 May 2014
  by Scott Fitzgerald
 */

 // the setup function runs once when you press reset or power the board
 void setup() {
   // initialize digital pin 13 as an output.
   pinMode(13, OUTPUT);
 }

 // the loop function runs over and over again forever
 void loop() {
   digitalWrite(13, HIGH);   // turn the LED on (HIGH is the voltage level)
   delay(1000);              // wait for a second
   digitalWrite(13, LOW);    // turn the LED off by making the voltage LOW
   delay(1000);              // wait for a second
 }

```

<a name="conclusion">

### Conclusion and Links

There is further application to this technic and it can be combine with further other fabrics and technics. For further application and developpement technics, see the website from the Human computer interaction from Daniel Gröger, Martin Weigel, and Jürgen Steimle, HCI Group, Saarland University. --> [here](http://resources.mpi-inf.mpg.de/conference/invws-15/display)

You can although see the work of Michael Wessely [here](https://www.lri.fr/~wessely/)
