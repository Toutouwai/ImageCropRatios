# Image Crop Ratios

A module for ProcessWire CMS/CMF. Allows preset aspect ratios to be defined per image field for the ProcessWire image crop tool.

The module adds a select dropdown to the crop tool. Choose an aspect ratio and the crop area will be fixed to that ratio.

## Screencast

![screencast](https://user-images.githubusercontent.com/1538852/76714249-e4344500-678a-11ea-942b-8a97c75000bf.gif)


## Installation

[Install](http://modules.processwire.com/install-uninstall/) the Image Crop Ratios module.

## Configuration

* Default aspect ratios for all image fields can be defined in the module config.
* Aspect ratios for specific image fields can be defined on the Input tab of the field settings.
* You can override the ratio settings in template context if needed.
* Insert a hyphen as the first item in the ratio settings unless you want to force a ratio to be applied to the crop tool. The hyphen represents a blank option that allows a free crop area to be drawn.

## Usage

1. Click the "Crop" link on the details view of an image thumbnail.
2. Click the "Crop" icon at the top of the editor window.
3. Choose an option from the "Ratio" select dropdown.
