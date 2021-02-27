const formatVolumeIconPath = require('../assets/scripts/main');
const volPath = require('../assets/scripts/main');



describe('volume function', () => {
    test('LOUDEST', () => {
      expect(formatVolumeIconPath(80)).toBe(`./assets/media/icons/volume-level-3.svg`);
    });

    test('LOUDER', () => {
        expect(formatVolumeIconPath(50)).toBe(`./assets/media/icons/volume-level-2.svg`);
      });

    test('LOUD', () => {
        expect(formatVolumeIconPath(20)).toBe(`./assets/media/icons/volume-level-1.svg`);
    });

    test('quiet', () => {
        expect(formatVolumeIconPath(0)).toBe(`./assets/media/icons/volume-level-0.svg`);
    });

  });
