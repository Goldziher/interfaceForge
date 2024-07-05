import { ERROR_MESSAGES, Factory } from '../src';
import { ComplexObject } from './test-types';

const typeOptions = ['1', '2', '3', 'all', 'none'];

const defaults: ComplexObject = {
    name: 'testObject',
    value: null,
};

describe('.build', () => {
    it('builds correctly with defaults object literal', async () => {
        const factory = new Factory<ComplexObject>(defaults);
        expect(await factory.buildAsync()).toStrictEqual<ComplexObject>(
            defaults,
        );
    });
    it('builds correctly with defaults function', async () => {
        const factory = new Factory<ComplexObject>(() => ({
            ...defaults,
            value: 99,
        }));
        expect(await factory.buildAsync()).toStrictEqual<ComplexObject>({
            ...defaults,
            value: 99,
        });
    });
    it('builds correctly with builder function', async () => {
        const factory = new Factory<ComplexObject>(
            defaults,
            async (defaults, iteration) => ({
                ...defaults,
                name: 'newObject',
                value: iteration + 1,
            }),
        );
        expect(await factory.buildAsync()).toStrictEqual<ComplexObject>({
            ...defaults,
            name: 'newObject',
            value: 1,
        });
    });
    it('merges options correctly when passed object literal', async () => {
        const factory = new Factory<ComplexObject>(defaults);
        expect(
            await factory.buildAsync({ name: 'newObject' }),
        ).toStrictEqual<ComplexObject>({
            ...defaults,
            name: 'newObject',
        });
    });
    it('merges options correctly when passed object literal in overrides key', async () => {
        const factory = new Factory<ComplexObject>(defaults);
        expect(
            await factory.buildAsync({ overrides: { name: 'newObject' } }),
        ).toStrictEqual<ComplexObject>({
            ...defaults,
            name: 'newObject',
        });
    });
    it('merges options correctly when passed options function', async () => {
        const factory = new Factory<ComplexObject>(defaults);
        expect(
            await factory.buildAsync({
                overrides: () => ({ name: 'newObject' }),
            }),
        ).toStrictEqual<ComplexObject>({
            ...defaults,
            name: 'newObject',
        });
    });
    it('merges options correctly when passed options async function', async () => {
        const factoryOne = new Factory<ComplexObject>(defaults);
        const factoryTwo = new Factory<ComplexObject>(async () => {
            return await factoryOne.buildAsync();
        });
        expect(
            await factoryTwo.buildAsync({
                overrides: async () => ({ name: 'newObject' }),
            }),
        ).toStrictEqual<ComplexObject>({
            ...defaults,
            name: 'newObject',
        });
    });
    it('handles generator iteration correctly', async () => {
        const factory = new Factory<ComplexObject>({
            ...defaults,
            options: {
                type: Factory.iterate(typeOptions),
            },
        });
        const result = await Promise.all(
            Array.from({ length: 5 })
                .fill(null)
                .map(async () => factory.buildAsync()),
        );
        expect(result.map(({ options }) => options!.type)).toEqual(typeOptions);
    });
});

describe('.buildSync', () => {
    it('builds correctly with defaults object literal', () => {
        const factory = new Factory<ComplexObject>(defaults);
        expect(factory.build()).toStrictEqual<ComplexObject>(defaults);
    });
    it('builds correctly with defaults function', () => {
        const factory = new Factory<ComplexObject>(() => ({
            ...defaults,
            value: 99,
        }));
        expect(factory.build()).toStrictEqual<ComplexObject>({
            ...defaults,
            value: 99,
        });
    });
    it('builds correctly with builder function', () => {
        const factory = new Factory<ComplexObject>(
            defaults,
            (defaults, iteration) => ({
                ...defaults,
                name: 'newObject',
                value: iteration + 1,
            }),
        );
        expect(factory.build()).toStrictEqual<ComplexObject>({
            ...defaults,
            name: 'newObject',
            value: 1,
        });
    });
    it('merges options correctly when passed object literal', () => {
        const factory = new Factory<ComplexObject>(defaults);
        expect(
            factory.build({ name: 'newObject' }),
        ).toStrictEqual<ComplexObject>({
            ...defaults,
            name: 'newObject',
        });
    });
    it('merges options correctly when passed object literal in overrides key', () => {
        const factory = new Factory<ComplexObject>(defaults);
        expect(
            factory.build({ overrides: { name: 'newObject' } }),
        ).toStrictEqual<ComplexObject>({
            ...defaults,
            name: 'newObject',
        });
    });
    it('merges options correctly when passed options function', () => {
        const factory = new Factory<ComplexObject>(defaults);
        expect(
            factory.build({
                overrides: () => ({ name: 'newObject' }),
            }),
        ).toStrictEqual<ComplexObject>({
            ...defaults,
            name: 'newObject',
        });
    });
    it('throws when called with Promise defaults', () => {
        const factory = new Factory<ComplexObject>(async () => defaults);
        expect(() => factory.build()).toThrow(ERROR_MESSAGES.PROMISE_DEFAULTS);
    });
    it('throws when called with Promise options', () => {
        const factory = new Factory<ComplexObject>(defaults);
        expect(() =>
            factory.build({
                overrides: async () => ({ name: 'newObject' }),
            }),
        ).toThrow(ERROR_MESSAGES.PROMISE_OVERRIDES);
    });
    it('throws when called with Promise returning factory', () => {
        const factory = new Factory<ComplexObject>(defaults);
        expect(() =>
            factory.build({
                factory: async (value) => ({ ...value, name: 'newObject' }),
            }),
        ).toThrow(ERROR_MESSAGES.PROMISE_FACTORY);
    });
    it('handles generator iteration correctly', () => {
        const factory = new Factory<ComplexObject>({
            ...defaults,
            options: {
                type: Factory.iterate(typeOptions),
            },
        });
        const result = Array.from({ length: 5 })
            .fill(null)
            .map(() => factory.build());
        expect(result.map(({ options }) => options!.type)).toEqual(typeOptions);
    });
});

describe('resetCounter', () => {
    const factory = new Factory<ComplexObject>(defaults);
    it('resets to zero by default', () => {
        expect(factory.counter).toBe(0);
        factory.build();
        expect(factory.counter).toBe(1);
        factory.resetCounter();
        expect(factory.counter).toBe(0);
    });
    it('resets to passed value', () => {
        expect(factory.counter).toBe(0);
        factory.build();
        expect(factory.counter).toBe(1);
        factory.resetCounter(5);
        expect(factory.counter).toBe(5);
    });
});

describe('.batch', () => {
    it('returns an array of unique objects', async () => {
        const factory = new Factory<ComplexObject>(
            {
                ...defaults,
                options: {
                    type: Factory.iterate(typeOptions),
                },
            },
            (defaults, iteration) => ({
                ...defaults,
                value: iteration,
            }),
        );
        const result = await factory.batchAsync(5);
        expect(result).toBeInstanceOf(Array);
        expect(result.map(({ value }) => value)).toEqual([0, 1, 2, 3, 4]);
        expect(result.map(({ options }) => options!.type)).toEqual(typeOptions);
    });
    it('increments counter correctly', () => {
        const factory = new Factory<{
            id: number;
        }>((i) => ({ id: i }));
        const results = Array.from({ length: 10 })
            .fill(null)
            .flatMap(() => factory.batch(10))
            .map(({ id }) => id);
        expect([...new Set(results)]).toHaveLength(100);
        expect(results[0]).toBe(0);
        expect(results.at(-1)).toBe(99);
    });
});

describe('.batchSync', () => {
    it('returns an array of unique objects', () => {
        const factory = new Factory<ComplexObject>(
            {
                ...defaults,
                options: {
                    type: Factory.iterate(typeOptions),
                },
            },
            (defaults, iteration) => ({
                ...defaults,
                value: iteration,
            }),
        );
        const result = factory.batch(5);
        expect(result).toBeInstanceOf(Array);
        expect(result.map(({ value }) => value)).toEqual([0, 1, 2, 3, 4]);
        expect(result.map(({ options }) => options!.type)).toEqual(typeOptions);
    });
});
