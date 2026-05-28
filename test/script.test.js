import { describe, it, expect } from 'vitest';
import { getJapanTimeString } from '../public/script.js';

describe('getJapanTimeString', () => {
  it('現在日時の文字列が生成できること', () => {
    const result = getJapanTimeString();
    expect(result).toBeTruthy();
  });

  it('生成される日時文字列が空でないこと', () => {
    const result = getJapanTimeString();
    expect(result.length).toBeGreaterThan(0);
  });

  it('日本時間として表示されること', () => {
    const result = getJapanTimeString();
    // ja-JP locale produces YYYY/M/D HH:MM:SS format
    expect(result).toMatch(/\d{4}\/\d{1,2}\/\d{1,2}/);
  });

  it('Last Updated用の表示文字列が生成できること', () => {
    const result = getJapanTimeString();
    expect(typeof result).toBe('string');
  });
});
