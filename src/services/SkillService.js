// services/SkillService.js
import { supabase } from '../config/supabase';

export const SkillService = {
  // Mendapatkan semua keterampilan
  async getAllSkills() {
    try {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('category', { ascending: true })
        .order('name', { ascending: true });

      if (error) {
        console.error('Error fetching skills:', error);
        return { success: false, error: error.message, data: [] };
      }

      // Mengelompokkan berdasarkan kategori
      const groupedSkills = data.reduce((acc, skill) => {
        if (!acc[skill.category]) {
          acc[skill.category] = [];
        }
        acc[skill.category].push({
          name: skill.name,
          level: skill.level
        });
        return acc;
      }, {});

      // Konversi ke format yang sesuai dengan struktur sebelumnya
      const formattedSkills = Object.entries(groupedSkills).map(([category, items]) => ({
        category,
        items
      }));

      return { success: true, data: formattedSkills, error: null };
    } catch (error) {
      console.error('Unexpected error fetching skills:', error);
      return { success: false, error: error.message, data: [] };
    }
  },

  // Mendapatkan keterampilan berdasarkan kategori
  async getSkillsByCategory(category) {
    try {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .eq('category', category)
        .order('name', { ascending: true });

      if (error) {
        console.error('Error fetching skills by category:', error);
        return { success: false, error: error.message, data: [] };
      }

      return { success: true, data, error: null };
    } catch (error) {
      console.error('Unexpected error fetching skills by category:', error);
      return { success: false, error: error.message, data: [] };
    }
  },

  // Menambah keterampilan baru
  async createSkill(skill) {
    try {
      const { data, error } = await supabase
        .from('skills')
        .insert([skill])
        .select()
        .single();

      if (error) {
        console.error('Error creating skill:', error);
        return { success: false, error: error.message, data: null };
      }

      return { success: true, data, error: null };
    } catch (error) {
      console.error('Unexpected error creating skill:', error);
      return { success: false, error: error.message, data: null };
    }
  },

  // Memperbarui keterampilan
  async updateSkill(id, skill) {
    try {
      const { data, error } = await supabase
        .from('skills')
        .update(skill)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Error updating skill:', error);
        return { success: false, error: error.message, data: null };
      }

      return { success: true, data, error: null };
    } catch (error) {
      console.error('Unexpected error updating skill:', error);
      return { success: false, error: error.message, data: null };
    }
  },

  // Menghapus keterampilan
  async deleteSkill(id) {
    try {
      const { error } = await supabase
        .from('skills')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting skill:', error);
        return { success: false, error: error.message };
      }

      return { success: true, error: null };
    } catch (error) {
      console.error('Unexpected error deleting skill:', error);
      return { success: false, error: error.message };
    }
  }
};