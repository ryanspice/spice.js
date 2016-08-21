import Vector from './vector.js';

window.Math.vector = window.Math.Vector = Vector;

/**
2DSprite
* @interface
* @private
*/
/*
const _private_Sprite = new WeakMap();

class _Sprite extends Vector {

	static properties = {
		sx:0,
		sy:0

	};

	get position(){

		return this;

	}

	constructor(){


		super();

		_private_Sprite.set(this,this.constructor.properties);

	}


}

window.sprite = _Sprite;

window.sprite2 = new _Sprite();
*/


/**
* @module
* @access public
* @example
* Application.client.math
*/

export default class Math {

    /**
    * Return the min max of 4 values
    * @method
    * @param {Number} a - value
    * @param {Number} b - value
    * @param {Number} c - value
    * @param {Number} d - value
    * @return {Object}
    * @private
    */

    minmax4(a, b, c, d){

		if (a < b)
		{
			if (c < d)
			{
				// sort order: (a, c) (b, d)
				if (a < c)
					minresult = a;
				else
					minresult = c;

				if (b > d)
					maxresult = b;
				else
					maxresult = d;
			}
			else
			{
				// sort order: (a, d) (b, c)
				if (a < d)
					minresult = a;
				else
					minresult = d;

				if (b > c)
					maxresult = b;
				else
					maxresult = c;
			}
		}
		else
		{
			if (c < d)
			{
				// sort order: (b, c) (a, d)
				if (b < c)
					minresult = b;
				else
					minresult = c;

				if (a > d)
					maxresult = a;
				else
					maxresult = d;
			}
			else
			{
				// sort order: (b, d) (a, c)
				if (b < d)
					minresult = b;
				else
					minresult = d;

				if (a > c)
					maxresult = a;
				else
					maxresult = c;
			}
		}

        return {min:minresult,max:maxresult};
	}

    /**
    * Testing rectangle overlap
    * @ignore
    * @method
    * @param {Rect} r - rectangle collision
    * @param {Rect} b - collision boundry
    * @return {Object}
    * @private
    */

    testRectOverlap (r, b)	{
    		// Instances don't overlap themselves.  Also return false early if either object has collisions disabled.
    		if (!b || !b.collisionsEnabled)
    			return false;

    		/**PREVIEWONLY**/this.collisioncheck_count++;

    		b.update_bbox();

    		var layerb = b.layer;
    		var haspolyb, polyb;

    		// Reject via bounding boxes first (fastest)
    		if (!b.bbox.intersects_rect(r))
    			return false;

    		// Test rect against tilemap
    		if (b.tilemap_exists)
    		{
    			b.getCollisionRectCandidates(r, collrect_candidates);

    			var collrects = collrect_candidates;
    			var i, len, c, tilerc;
    			var tmx = b.x;
    			var tmy = b.y;

    			for (i = 0, len = collrects.length; i < len; ++i)
    			{
    				c = collrects[i];
    				tilerc = c.rc;
    				/**PREVIEWONLY**/this.collisioncheck_count++;

    				if (r.intersects_rect_off(tilerc, tmx, tmy))
    				{
    					// Check against tile poly if present
    					if (c.poly)
    					{
    						/**PREVIEWONLY**/this.polycheck_count++;

    						this.temp_poly.set_from_rect(r, 0, 0);

    						if (c.poly.intersects_poly(this.temp_poly, -(tmx + tilerc.left), -(tmy + tilerc.top)))
    						{
    							cr.clearArray(collrect_candidates);
    							return true;
    						}
    					}
    					// No poly: bounding boxes overlap so register a collision
    					else
    					{
    						cr.clearArray(collrect_candidates);
    						return true;
    					}
    				}
    			}

    			cr.clearArray(collrect_candidates);
    			return false;
    		}
    		// Test rect against object
    		else
    		{
    			/**PREVIEWONLY**/this.polycheck_count++;

    			tmpQuad.set_from_rect(r);

    			// Reject via bounding quads second (presumably next fastest)
    			if (!b.bquad.intersects_quad(tmpQuad))
    				return false;

    			haspolyb = (b.collision_poly && !b.collision_poly.is_empty());

    			// Does not have collision poly: must be in bounding quad overlap
    			if (!haspolyb)
    				return true;

    			b.collision_poly.cache_poly(b.width, b.height, b.angle);
    			tmpQuad.offset(-r.left, -r.top);
    			this.temp_poly.set_from_quad(tmpQuad, 0, 0, 1, 1);

    			return b.collision_poly.intersects_poly(this.temp_poly, r.left - b.x, r.top - b.y);
    		}
    	}

    /** @private */

	testSegmentOverlap(x1, y1, x2, y2, b)	{
		if (!b || !b.collisionsEnabled)
			return false;

		/**PREVIEWONLY**/this.collisioncheck_count++;
		b.update_bbox();

		var layerb = b.layer;
		var haspolyb, polyb;

		// Reject via bounding boxes first (fastest). Create temporary bounding box around the segment.
		tmpRect.set(cr.min(x1, x2), cr.min(y1, y2), cr.max(x1, x2), cr.max(y1, y2));

		if (!b.bbox.intersects_rect(tmpRect))
			return false;

		// Test segment against tilemap
		if (b.tilemap_exists)
		{
			b.getCollisionRectCandidates(tmpRect, collrect_candidates);
			var collrects = collrect_candidates;
			var i, len, c, tilerc;
			var tmx = b.x;
			var tmy = b.y;

			for (i = 0, len = collrects.length; i < len; ++i)
			{
				c = collrects[i];
				tilerc = c.rc;
				/**PREVIEWONLY**/this.collisioncheck_count++;

				// Segment bounding box intersects this tile collision rectangle
				if (tmpRect.intersects_rect_off(tilerc, tmx, tmy))
				{
					/**PREVIEWONLY**/this.polycheck_count++;

					// Test real segment intersection
					tmpQuad.set_from_rect(tilerc);
					tmpQuad.offset(tmx, tmy);

					if (tmpQuad.intersects_segment(x1, y1, x2, y2))
					{
						// Check against tile collision poly if any
						if (c.poly)
						{
							if (c.poly.intersects_segment(tmx + tilerc.left, tmy + tilerc.top, x1, y1, x2, y2))
							{
								cr.clearArray(collrect_candidates);
								return true;
							}
						}
						// Otherwise is intersecting tile box
						else
						{
							cr.clearArray(collrect_candidates);
							return true;
						}
					}
				}
			}

			cr.clearArray(collrect_candidates);
			return false;
		}
		else
		{
			/**PREVIEWONLY**/this.polycheck_count++;

			// Reject via bounding quads second (presumably next fastest)
			if (!b.bquad.intersects_segment(x1, y1, x2, y2))
				return false;

			haspolyb = (b.collision_poly && !b.collision_poly.is_empty());

			// Does not have collision poly: must be in bounding quad intersection
			if (!haspolyb)
				return true;

			b.collision_poly.cache_poly(b.width, b.height, b.angle);

			return b.collision_poly.intersects_segment(b.x, b.y, x1, y1, x2, y2);
		}
	}

    /** @private
    * Push to try and move out of solid.  Pass -1, 0 or 1 for xdir and ydir to specify a push direction.
    */

	pushOutSolid (inst, xdir, ydir, dist, include_jumpthrus, specific_jumpthru){
		var push_dist = dist || 50;

		var oldx = inst.x
		var oldy = inst.y;

		var i;
		var last_overlapped = null, secondlast_overlapped = null;

		for (i = 0; i < push_dist; i++)
		{
			inst.x = (oldx + (xdir * i));
			inst.y = (oldy + (ydir * i));
			inst.set_bbox_changed();

			// Test if we've cleared the last instance we were overlapping
			if (!this.testOverlap(inst, last_overlapped))
			{
				// See if we're still overlapping a different solid
				last_overlapped = this.testOverlapSolid(inst);

				if (last_overlapped)
					secondlast_overlapped = last_overlapped;

				// We're clear of all solids - check jumpthrus
				if (!last_overlapped)
				{
					if (include_jumpthrus)
					{
						if (specific_jumpthru)
							last_overlapped = (this.testOverlap(inst, specific_jumpthru) ? specific_jumpthru : null);
						else
							last_overlapped = this.testOverlapJumpThru(inst);

						if (last_overlapped)
							secondlast_overlapped = last_overlapped;
					}

					// Clear of both - completed push out.  Adjust fractionally to 1/16th of a pixel.
					if (!last_overlapped)
					{
						if (secondlast_overlapped)
							this.pushInFractional(inst, xdir, ydir, secondlast_overlapped, 16);

						return true;
					}
				}
			}
		}

		// Didn't get out a solid: oops, we're stuck.
		// Restore old position.
		inst.x = oldx;
		inst.y = oldy;
		inst.set_bbox_changed();
		return false;
	}

    /** @private */

	pushOut (inst, xdir, ydir, dist, otherinst)	{
		var push_dist = dist || 50;

		var oldx = inst.x
		var oldy = inst.y;

		var i;

		for (i = 0; i < push_dist; i++)
		{
			inst.x = (oldx + (xdir * i));
			inst.y = (oldy + (ydir * i));
			inst.set_bbox_changed();

			// Test if we've cleared the last instance we were overlapping
			if (!this.testOverlap(inst, otherinst))
				return true;
		}

		// Didn't get out a solid: oops, we're stuck.
		// Restore old position.
		inst.x = oldx;
		inst.y = oldy;
		inst.set_bbox_changed();
		return false;
	}

    /** @private */

	pushInFractional (inst, xdir, ydir, obj, limit)    	{
		var divisor = 2;
		var frac;
		var forward = false;
		var overlapping = false;
		var bestx = inst.x;
		var besty = inst.y;

		while (divisor <= limit)
		{
			frac = 1 / divisor;
			divisor *= 2;

			inst.x += xdir * frac * (forward ? 1 : -1);
			inst.y += ydir * frac * (forward ? 1 : -1);
			inst.set_bbox_changed();

			if (this.testOverlap(inst, obj))
			{
				// Overlapped something: try going forward again
				forward = true;
				overlapping = true;
			}
			else
			{
				// Didn't overlap anything: keep going back
				forward = false;
				overlapping = false;
				bestx = inst.x;
				besty = inst.y;
			}
		}

		// If left overlapping, move back to last place not overlapping
		if (overlapping)
		{
			inst.x = bestx;
			inst.y = besty;
			inst.set_bbox_changed();
		}
	};

    /** @private */

	pushOutSolidNearest (inst, max_dist_)    	{
		var max_dist = (cr.is_undefined(max_dist_) ? 100 : max_dist_);
		var dist = 0;
		var oldx = inst.x
		var oldy = inst.y;

		var dir = 0;
		var dx = 0, dy = 0;
		var last_overlapped = this.testOverlapSolid(inst);

		if (!last_overlapped)
			return true;		// already clear of solids

		// 8-direction spiral scan
		while (dist <= max_dist)
		{
			switch (dir) {
			case 0:		dx = 0; dy = -1; dist++; break;
			case 1:		dx = 1; dy = -1; break;
			case 2:		dx = 1; dy = 0; break;
			case 3:		dx = 1; dy = 1; break;
			case 4:		dx = 0; dy = 1; break;
			case 5:		dx = -1; dy = 1; break;
			case 6:		dx = -1; dy = 0; break;
			case 7:		dx = -1; dy = -1; break;
			}

			dir = (dir + 1) % 8;

			inst.x = cr.floor(oldx + (dx * dist));
			inst.y = cr.floor(oldy + (dy * dist));
			inst.set_bbox_changed();

			// Test if we've cleared the last instance we were overlapping
			if (!this.testOverlap(inst, last_overlapped))
			{
				// See if we're still overlapping a different solid
				last_overlapped = this.testOverlapSolid(inst);

				// We're clear of all solids
				if (!last_overlapped)
					return true;
			}
		}

		// Didn't get pushed out: restore old position and return false
		inst.x = oldx;
		inst.y = oldy;
		inst.set_bbox_changed();
		return false;
	};

    /** @private */

	registerCollision (a, b)    	{
		// Ignore if either instance has disabled collisions
		if (!a.collisionsEnabled || !b.collisionsEnabled)
			return;

		this.registered_collisions.push([a, b]);
	}

    /** @private */

	checkRegisteredCollision (a, b)    	{
		var i, len, x;
		for (i = 0, len = this.registered_collisions.length; i < len; i++)
		{
			x = this.registered_collisions[i];

			if ((x[0] == a && x[1] == b) || (x[0] == b && x[1] == a))
				return true;
		}

		return false;
	}

    /** @private */

    calculateSolidBounceAngle(inst, startx, starty, obj)    	{
    	var objx = inst.x;
    	var objy = inst.y;
    	var radius = cr.max(10, cr.distanceTo(startx, starty, objx, objy));
    	var startangle = cr.angleTo(startx, starty, objx, objy);
    	var firstsolid = obj || this.testOverlapSolid(inst);

    	// Not overlapping a solid: function used wrong, return inverse of object angle (so it bounces back in reverse direction)
    	if (!firstsolid)
    		return cr.clamp_angle(startangle + cr.PI);

    	var cursolid = firstsolid;

    	// Rotate anticlockwise in 5 degree increments until no longer overlapping
    	// Don't search more than 175 degrees around (36 * 5 = 180)
    	var i, curangle, anticlockwise_free_angle, clockwise_free_angle;
    	var increment = cr.to_radians(5);	// 5 degree increments

    	for (i = 1; i < 36; i++)
    	{
    		curangle = startangle - i * increment;
    		inst.x = startx + Math.cos(curangle) * radius;
    		inst.y = starty + Math.sin(curangle) * radius;
    		inst.set_bbox_changed();

    		// No longer overlapping current solid
    		if (!this.testOverlap(inst, cursolid))
    		{
    			// Search for any other solid
    			cursolid = obj ? null : this.testOverlapSolid(inst);

    			// Not overlapping any other solid: we've now reached the anticlockwise free angle
    			if (!cursolid)
    			{
    				anticlockwise_free_angle = curangle;
    				break;
    			}
    		}
    	}

    	// Did not manage to free up in anticlockwise direction: use reverse angle
    	if (i === 36)
    		anticlockwise_free_angle = cr.clamp_angle(startangle + cr.PI);

    	var cursolid = firstsolid;

    	// Now search in clockwise direction
    	for (i = 1; i < 36; i++)
    	{
    		curangle = startangle + i * increment;
    		inst.x = startx + Math.cos(curangle) * radius;
    		inst.y = starty + Math.sin(curangle) * radius;
    		inst.set_bbox_changed();

    		// No longer overlapping current solid
    		if (!this.testOverlap(inst, cursolid))
    		{
    			// Search for any other solid
    			cursolid = obj ? null : this.testOverlapSolid(inst);

    			// Not overlapping any other solid: we've now reached the clockwise free angle
    			if (!cursolid)
    			{
    				clockwise_free_angle = curangle;
    				break;
    			}
    		}
    	}

    	// Did not manage to free up in clockwise direction: use reverse angle
    	if (i === 36)
    		clockwise_free_angle = cr.clamp_angle(startangle + cr.PI);

    	// Put the object back to its original position
    	inst.x = objx;
    	inst.y = objy;
    	inst.set_bbox_changed();

    	// Both angles match: can only be if object completely contained by solid and both searches went all
    	// the way round to backwards.  Just return the back angle.
    	if (clockwise_free_angle === anticlockwise_free_angle)
    		return clockwise_free_angle;

    	// We now have the first anticlockwise and first clockwise angles that are free.
    	// Calculate the normal.
    	var half_diff = cr.angleDiff(clockwise_free_angle, anticlockwise_free_angle) / 2;
    	var normal;

    	// Acute angle
    	if (cr.angleClockwise(clockwise_free_angle, anticlockwise_free_angle))
    	{
    		normal = cr.clamp_angle(anticlockwise_free_angle + half_diff + cr.PI);
    	}
    	// Obtuse angle
    	else
    	{
    		normal = cr.clamp_angle(clockwise_free_angle + half_diff);
    	}

    	assert2(!isNaN(normal), "Bounce normal computed as NaN");

    	// Reflect startangle about normal (r = v - 2 (v . n) n)
    	var vx = Math.cos(startangle);
    	var vy = Math.sin(startangle);
    	var nx = Math.cos(normal);
    	var ny = Math.sin(normal);
    	var v_dot_n = vx * nx + vy * ny;
    	var rx = vx - 2 * v_dot_n * nx;
    	var ry = vy - 2 * v_dot_n * ny;
    	return cr.angleTo(0, 0, rx, ry);
    }

    /** @private */

	saveInstanceToJSON(inst, state_only)	{

		var i, len, world, behinst, et;
		var type = inst.type;
		var plugin = type.plugin;

		var o = {};

		if (state_only)
			o["c2"] = true;		// mark as known json data from Construct 2
		else
			o["uid"] = inst.uid;

		if (cr.hasAnyOwnProperty(inst.extra))
			o["ex"] = CopyExtraObject(inst.extra);

		// Save instance variables
		if (inst.instance_vars && inst.instance_vars.length)
		{
			o["ivs"] = {};

			for (i = 0, len = inst.instance_vars.length; i < len; i++)
			{
				o["ivs"][inst.type.instvar_sids[i].toString()] = inst.instance_vars[i];
			}
		}

		// Save world data
		if (plugin.is_world)
		{
			world = {
				"x": inst.x,
				"y": inst.y,
				"w": inst.width,
				"h": inst.height,
				"l": inst.layer.sid,
				"zi": inst.get_zindex()
			};

			if (inst.angle !== 0)
				world["a"] = inst.angle;

			if (inst.opacity !== 1)
				world["o"] = inst.opacity;

			if (inst.hotspotX !== 0.5)
				world["hX"] = inst.hotspotX;

			if (inst.hotspotY !== 0.5)
				world["hY"] = inst.hotspotY;

			if (inst.blend_mode !== 0)
				world["bm"] = inst.blend_mode;

			if (!inst.visible)
				world["v"] = inst.visible;

			if (!inst.collisionsEnabled)
				world["ce"] = inst.collisionsEnabled;

			if (inst.my_timescale !== -1)
				world["mts"] = inst.my_timescale;

			if (type.effect_types.length)
			{
				world["fx"] = [];

				for (i = 0, len = type.effect_types.length; i < len; i++)
				{
					et = type.effect_types[i];
					world["fx"].push({"name": et.name,
									  "active": inst.active_effect_flags[et.index],
									  "params": inst.effect_params[et.index] });
				}
			}

			o["w"] = world;
		}

		// Save behaviors
		if (inst.behavior_insts && inst.behavior_insts.length)
		{
			o["behs"] = {};

			for (i = 0, len = inst.behavior_insts.length; i < len; i++)
			{
				behinst = inst.behavior_insts[i];

				if (behinst.saveToJSON)
					o["behs"][behinst.type.sid.toString()] = behinst.saveToJSON();
			}
		}

		// Save plugin own data
		if (inst.saveToJSON)
			o["data"] = inst.saveToJSON();

		return o;
	}

    /** @private */

    static segments_intersect(a1x, a1y, a2x, a2y, b1x, b1y, b2x, b2y) {

		var max_ax, min_ax, max_ay, min_ay, max_bx, min_bx, max_by, min_by;

		// Long-hand code since this is a performance hotspot and this type of
		// code minimises the number of conditional tests necessary.
		if (a1x < a2x)
		{
			min_ax = a1x;
			max_ax = a2x;
		}
		else
		{
			min_ax = a2x;
			max_ax = a1x;
		}

		if (b1x < b2x)
		{
			min_bx = b1x;
			max_bx = b2x;
		}
		else
		{
			min_bx = b2x;
			max_bx = b1x;
		}

		if (max_ax < min_bx || min_ax > max_bx)
			return false;

		if (a1y < a2y)
		{
			min_ay = a1y;
			max_ay = a2y;
		}
		else
		{
			min_ay = a2y;
			max_ay = a1y;
		}

		if (b1y < b2y)
		{
			min_by = b1y;
			max_by = b2y;
		}
		else
		{
			min_by = b2y;
			max_by = b1y;
		}

		if (max_ay < min_by || min_ay > max_by)
			return false;

		var dpx = b1x - a1x + b2x - a2x;
		var dpy = b1y - a1y + b2y - a2y;
		var qax = a2x - a1x;
		var qay = a2y - a1y;
		var qbx = b2x - b1x;
		var qby = b2y - b1y;

		var d = cr.abs(qay * qbx - qby * qax);
		var la = qbx * dpy - qby * dpx;

		if (cr.abs(la) > d)
			return false;

		var lb = qax * dpy - qay * dpx;

		return cr.abs(lb) <= d;
	};


    /**
    * Builds new math into global math and Application.math
    * @param {number} x - position.x
    * @param {number} y - position.y
    */

    constructor(){


    }

}
