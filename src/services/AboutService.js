// services/AboutService.js
import { supabase } from '../config/supabase';

export const AboutService = {
  // Mendapatkan semua data tentang saya
  async getAllAboutData() {
    try {
      // Ambil data dari tabel about
      const { data: aboutData, error: aboutError } = await supabase
        .from('about')
        .select('*')
        .order('order_index', { ascending: true });

      if (aboutError) {
        console.error('Error fetching about data:', aboutError);
        return { success: false, error: aboutError.message, data: null };
      }

      // Ambil data timeline
      const { data: timelineData, error: timelineError } = await supabase
        .from('timeline')
        .select('*')
        .order('order_index', { ascending: true });

      if (timelineError) {
        console.error('Error fetching timeline data:', timelineError);
        return { success: false, error: timelineError.message, data: null };
      }

      // Gabungkan data
      const aboutContent = {
        sections: aboutData,
        timeline: timelineData
      };

      return { success: true, data: aboutContent, error: null };
    } catch (error) {
      console.error('Unexpected error fetching about data:', error);
      return { success: false, error: error.message, data: null };
    }
  },

  // Mendapatkan data tentang saya berdasarkan ID
  async getAboutById(id) {
    try {
      const { data, error } = await supabase
        .from('about')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching about by id:', error);
        return { success: false, error: error.message, data: null };
      }

      return { success: true, data, error: null };
    } catch (error) {
      console.error('Unexpected error fetching about by id:', error);
      return { success: false, error: error.message, data: null };
    }
  },

  // Menambah data tentang saya
  async createAbout(about) {
    try {
      const { data, error } = await supabase
        .from('about')
        .insert([about])
        .select()
        .single();

      if (error) {
        console.error('Error creating about:', error);
        return { success: false, error: error.message, data: null };
      }

      return { success: true, data, error: null };
    } catch (error) {
      console.error('Unexpected error creating about:', error);
      return { success: false, error: error.message, data: null };
    }
  },

  // Memperbarui data tentang saya
  async updateAbout(id, about) {
    try {
      const { data, error } = await supabase
        .from('about')
        .update(about)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Error updating about:', error);
        return { success: false, error: error.message, data: null };
      }

      return { success: true, data, error: null };
    } catch (error) {
      console.error('Unexpected error updating about:', error);
      return { success: false, error: error.message, data: null };
    }
  },

  // Menghapus data tentang saya
  async deleteAbout(id) {
    try {
      const { error } = await supabase
        .from('about')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting about:', error);
        return { success: false, error: error.message };
      }

      return { success: true, error: null };
    } catch (error) {
      console.error('Unexpected error deleting about:', error);
      return { success: false, error: error.message };
    }
  }
};