import SpriteMaskFilterBase from './SpriteMaskFilterBase';
import { Matrix } from '../../../../math';
import { readFileSync } from 'fs';
import { join } from 'path';
import { default as TextureMatrix } from '../../../../textures/TextureMatrix';

/**
 * The SpriteMaskFilterOnlyAlpha class
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI
 */
export default class SpriteMaskFilterOnlyAlpha extends SpriteMaskFilterBase
{
    /**
     * @param {PIXI.Sprite} sprite - the target sprite
     */
    constructor(sprite)
    {
        super(
            sprite,
            readFileSync(join(__dirname, './spriteMaskFilter.vert'), 'utf8'),
            readFileSync(join(__dirname, './spriteMaskFilterOnlyAlpha.frag'), 'utf8')
        );
    }
}
