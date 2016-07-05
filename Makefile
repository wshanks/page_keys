BLDDIR = build

# Necessary because zip copies leading directories if run from above targets
ABS_BLDDIR := $(shell readlink -f $(BLDDIR))

all: xpi

xpi: $(BLDDIR)/page_keys.xpi

$(BLDDIR)/page_keys.xpi:
	@mkdir -p $(dir $@)
	cd addon; zip -r $(ABS_BLDDIR)/page_keys.xpi * -x \*.swp -x 'libs/mousetrap/*'
	cd addon; zip -r $(ABS_BLDDIR)/page_keys.xpi * -i libs/mousetrap/mousetrap.min.js

clean:
	rm -f $(BLDDIR)/page_keys.xpi

.PHONY: all clean xpi
