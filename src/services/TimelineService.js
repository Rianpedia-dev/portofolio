// services/TimelineService.js
import { supabase } from '../config/supabase';

export const TimelineService = {
  // Mendapatkan semua timeline
  async getAllTimelines() {
    try {
      const { data, error } = await supabase
        .from('timeline')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) {
        console.error('Error fetching timeline:', error);
        return { success: false, error: error.message, data: [] };
      }

      return { success: true, data, error: null };
    } catch (error) {
      console.error('Unexpected error fetching timeline:', error);
      return { success: false, error: error.message, data: [] };
    }
  },

  // Mendapatkan timeline berdasarkan ID
  async getTimelineById(id) {
    try {
      const { data, error } = await supabase
        .from('timeline')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching timeline by id:', error);
        return { success: false, error: error.message, data: null };
      }

      return { success: true, data, error: null };
    } catch (error) {
      console.error('Unexpected error fetching timeline by id:', error);
      return { success: false, error: error.message, data: null };
    }
  },

  // Menambah timeline baru
  async createTimeline(timeline) {
    try {
      const { data, error } = await supabase
        .from('timeline')
        .insert([timeline])
        .select()
        .single();

      if (error) {
        console.error('Error creating timeline:', error);
        return { success: false, error: error.message, data: null };
      }

      return { success: true, data, error: null };
    } catch (error) {
      console.error('Unexpected error creating timeline:', error);
      return { success: false, error: error.message, data: null };
    }
  },

  // Memperbarui timeline
  async updateTimeline(id, timeline) {
    try {
      const { data, error } = await supabase
        .from('timeline')
        .update(timeline)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Error updating timeline:', error);
        return { success: false, error: error.message, data: null };
      }

      return { success: true, data, error: null };
    } catch (error) {
      console.error('Unexpected error updating timeline:', error);
      return { success: false, error: error.message, data: null };
    }
  },

  // Menghapus timeline
  async deleteTimeline(id) {
    try {
      const { error } = await supabase
        .from('timeline')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting timeline:', error);
        return { success: false, error: error.message };
      }

      return { success: true, error: null };
    } catch (error) {
      console.error('Unexpected error deleting timeline:', error);
      return { success: false, error: error.message };
    }
  }
};