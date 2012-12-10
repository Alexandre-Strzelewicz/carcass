var carcass = require('carcass');
var should = require('should');

require('./fixture');

describe('Configurable', function() {
    describe('A same set of tests from configurable.js.', function() {
        var obj = null;

        beforeEach(function() {
            obj = {};
            carcass.mixable(obj);
            obj.plugin('plugins', 'configurable');
        });

        describe('.set(obj)', function() {
            it('should set multiple values', function() {
                obj.set({
                    foo: 'bar',
                    bar: 'baz'
                });

                obj.get('foo').should.equal('bar');
                obj.get('bar').should.equal('baz');
            });
        });

        describe('.set(name, val)', function() {
            it('should set .settings[name] to val', function() {
                obj.set('foo', 'bar');
                obj.settings.foo.should.equal('bar');
            });

            it('should return itself', function() {
                obj.set('foo', 'bar').should.equal(obj);
            });
        });

        describe('.get(name)', function() {
            it('should get .settings[name]', function() {
                obj.set('foo', 'bar');
                obj.get('foo').should.equal('bar');
            });
        });

        describe('.enable(name)', function() {
            it('should set .settings[name] to true', function() {
                obj.enable('proxy');
                obj.get('proxy').should.equal(true);
            });

            it('should return itself', function() {
                obj.enable('proxy').should.equal(obj);
            });
        });

        describe('.disable(name)', function() {
            it('should set .settings[name] to false', function() {
                obj.disable('proxy');
                obj.get('proxy').should.equal(false);
            });

            it('should return itself', function() {
                obj.disable('proxy').should.equal(obj);
            });
        });

        describe('.enabled(name)', function() {
            it('should return true when enabled', function() {
                obj.enabled('proxy').should.equal(false);
                obj.enable('proxy');
                obj.enabled('proxy').should.equal(true);
            });
        });

        describe('.disabled(name)', function() {
            it('should return true when disabled', function() {
                obj.disabled('proxy').should.equal(true);
                obj.enable('proxy');
                obj.disabled('proxy').should.equal(false);
            });
        });
    });
});
